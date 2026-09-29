/* ============================================
   Beslan Cars — main.js
   Мобильное меню, формы (Telegram + mailto), отзывы
   ============================================ */

// ===== НАСТРОЙКИ (заполнить после создания Telegram-бота) =====
const CONFIG = {
  TELEGRAM_BOT_TOKEN: '', // например: '123456789:AA...' — оставить пустым, если бот ещё не создан
  TELEGRAM_CHAT_ID: '',   // ваш chat_id для приёма заявок
  PHONE_DISPLAY: '+7 (918) 708-20-23',
  PHONE_RAW: '+79187082023',
  EMAIL: 'All-World-Cars-Beslan@yandex.ru',
};

// ===== Мобильное меню =====
(function initBurger() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }
})();

// ===== Маска телефона (простая) =====
document.addEventListener('input', (e) => {
  const el = e.target;
  if (el.matches('input[type="tel"]')) {
    let v = el.value.replace(/\D/g, '').replace(/^8/, '7');
    if (v && !v.startsWith('7')) v = '7' + v;
    v = v.slice(0, 11);
    let out = '';
    if (v.length > 0) out = '+' + v[0];
    if (v.length > 1) out += ' (' + v.slice(1, 4);
    if (v.length >= 4) out += ') ' + v.slice(4, 7);
    if (v.length >= 8) out += '-' + v.slice(7, 9);
    if (v.length >= 10) out += '-' + v.slice(9, 11);
    el.value = out;
  }
});

// ===== Отправка заявки =====
async function sendLead(text) {
  if (CONFIG.TELEGRAM_BOT_TOKEN && CONFIG.TELEGRAM_CHAT_ID) {
    try {
      await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CONFIG.TELEGRAM_CHAT_ID, text }),
      });
      return true;
    } catch (err) {
      console.error('Telegram error:', err);
      return false;
    }
  }
  // Fallback: открытие почтового клиента, если бот не настроен
  const subject = encodeURIComponent('Заявка с сайта beslancars.ru');
  const body = encodeURIComponent(text);
  window.location.href = `mailto:${CONFIG.EMAIL}?subject=${subject}&body=${body}`;
  return true;
}

// Обработка всех форм на странице
document.querySelectorAll('form[data-lead-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Спам-ловушка
    const hp = form.querySelector('.hp input');
    if (hp && hp.value) return;

    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const car = (fd.get('car') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();

    if (!name || phone.replace(/\D/g, '').length < 11) {
      alert('Пожалуйста, укажите имя и полный номер телефона.');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Отправляем...'; }

    const text =
      `🔧 НОВАЯ ЗАЯВКА — beslancars.ru\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      (car ? `🚗 Авто: ${car}\n` : '') +
      (message ? `📝 Запчасти/VIN: ${message}\n` : '') +
      `\n🕒 ${new Date().toLocaleString('ru-RU')}`;

    const ok = await sendLead(text);

    if (btn) { btn.disabled = false; btn.textContent = btnText; }

    if (ok) {
      form.reset();
      // Сохраняем заявку локально как резервную копию
      try {
        const leads = JSON.parse(localStorage.getItem('bc_leads') || '[]');
        leads.push({ name, phone, car, message, date: new Date().toISOString() });
        localStorage.setItem('bc_leads', JSON.stringify(leads));
      } catch (_) {}
      window.location.href = 'spasibo.html';
    } else {
      alert('Не удалось отправить заявку. Позвоните нам: ' + CONFIG.PHONE_DISPLAY);
    }
  });
});

// ===== Отзывы (статичные + добавленные админом через JS-массив) =====
// Чтобы добавить отзыв — допишите объект в массив ниже и закоммитьте файл.
const REVIEWS = [
  { name: 'Алан', city: 'Беслан', rating: 5, text: 'Заказывал стойки стабилизатора на Камри. Привезли в тот же вечер прямо домой. Цена вышла ниже, чем во Владикавказе. Рекомендую!' },
  { name: 'Руслан', city: 'Владикавказ', rating: 5, text: 'Постоянно беру расходники для своей Газели. Работают с юрлицами, закрывающие документы присылают сразу. Удобно.' },
  { name: 'Заурбек', city: 'Моздок', rating: 4, text: 'Искали редуктор на грузовик — привезли под заказ за 4 дня. Всё подошло по VIN. Спасибо менеджеру за помощь с подбором.' },
];

(function renderReviews() {
  const box = document.getElementById('reviews-container');
  if (!box) return;
  box.innerHTML = REVIEWS.map(r => `
    <div class="review">
      <div class="review__stars">${'★'.repeat(r.rating)}${'<span style="color:#d7dee8">' + '★'.repeat(5 - r.rating) + '</span>'}</div>
      <p class="review__text">«${r.text}»</p>
      <div class="review__author">${r.name}</div>
      <div class="review__city">${r.city}</div>
    </div>`).join('');
})();

// ===== Фото ПВЗ: автоматически показать, когда файл появится =====
(function pvzAuto() {
  const img = document.getElementById('pvz-img');
  const ph = document.getElementById('pvz-placeholder');
  if (!img || !ph) return;
  img.addEventListener('load', () => { ph.style.display = 'none'; img.style.display = 'block'; });
  img.addEventListener('error', () => { img.style.display = 'none'; ph.style.display = 'flex'; });
})();

// ===== Текущий год в футере =====
document.querySelectorAll('.js-year').forEach(el => { el.textContent = new Date().getFullYear(); });
