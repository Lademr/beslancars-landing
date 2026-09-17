// Beslan Cars - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // === Modal Functionality ===
    const modals = document.querySelectorAll('.modal');
    const openModalBtns = document.querySelectorAll('.open-modal, .open-review-modal');
    const closeModals = document.querySelectorAll('.close-modal');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalType = this.classList.contains('open-review-modal') ? 'reviewModal' : 'callbackModal';
            document.getElementById(modalType).style.display = 'block';
        });
    });

    closeModals.forEach(span => {
        span.addEventListener('click', function() {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            modals.forEach(modal => modal.style.display = 'none');
        }
    });

    // === Form Submissions ===
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Определяем тип формы
            const formType = this.classList.contains('main-form') ? 'order' : 
                            this.dataset.type || 'callback';
            
            // Сохраняем данные в localStorage (для демонстрации)
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            submissions.push({
                type: formType,
                data: data,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('formSubmissions', JSON.stringify(submissions));
            
            // Если это отзыв, сохраняем отдельно
            if (formType === 'review') {
                const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
                reviews.unshift({
                    name: data.name,
                    city: data.city || 'Беслан',
                    rating: data.rating,
                    text: data.text,
                    date: new Date().toLocaleDateString('ru-RU')
                });
                localStorage.setItem('reviews', JSON.stringify(reviews));
                renderReviews();
                
                alert('Спасибо за ваш отзыв! Он появится после модерации.');
                document.getElementById('reviewModal').style.display = 'none';
            } else {
                // Для заявок и звонков
                alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                this.reset();
                
                if (formType !== 'order') {
                    document.getElementById('callbackModal').style.display = 'none';
                }
            }
            
            // TODO: Здесь можно добавить отправку в Telegram или на email
            // sendToTelegram(data);
        });
    });

    // === Render Reviews from localStorage ===
    function renderReviews() {
        const container = document.getElementById('reviews-container');
        const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        
        if (reviews.length === 0) {
            // Добавим тестовые отзывы если пусто
            const defaultReviews = [
                {
                    name: 'Алан Ц.',
                    city: 'Беслан',
                    rating: 5,
                    text: 'Отличный сервис! Заказал запчасти для BMW, привезли за 3 дня. Цены адекватные, менеджеры вежливые.',
                    date: '15.10.2024'
                },
                {
                    name: 'Марина К.',
                    city: 'Владикавказ',
                    rating: 5,
                    text: 'Заказывала масло и фильтры для Toyota. Доставили бесплатно, так как сумма была больше 5000. Очень удобно!',
                    date: '12.10.2024'
                },
                {
                    name: 'Руслан Б.',
                    city: 'Беслан',
                    rating: 4,
                    text: 'Работаю с ними уже полгода как юрлицо. Документы всегда в порядке, проблем не было. Рекомендую.',
                    date: '08.10.2024'
                }
            ];
            
            if (localStorage.getItem('reviews') === null) {
                localStorage.setItem('reviews', JSON.stringify(defaultReviews));
                renderReviews();
                return;
            }
            
            container.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">Пока нет отзывов. Будьте первым!</p>';
            return;
        }
        
        container.innerHTML = reviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <div>
                        <div class="review-author">${review.name}</div>
                        <div class="review-city">${review.city} • ${review.date}</div>
                    </div>
                    <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `).join('');
    }

    // Инициализация отзывов
    renderReviews();

    // === Smooth Scroll for Anchor Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // === Mobile Menu Toggle ===
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        });
    }

    // === Phone Mask (Simple) ===
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = value.substring(1);
                }
                if (value.length > 10) value = value.substring(0, 10);
                
                let formatted = '+7 ';
                if (value.length > 0) formatted += '(' + value.substring(0, 3);
                if (value.length >= 3) formatted += ') ' + value.substring(3, 6);
                if (value.length >= 6) formatted += '-' + value.substring(6, 8);
                if (value.length >= 8) formatted += '-' + value.substring(8, 10);
                
                e.target.value = formatted;
            }
        });
    });

});

// === Функция отправки в Telegram (раскомментировать и настроить при необходимости) ===
/*
async function sendToTelegram(data) {
    const BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Замените на токен вашего бота
    const CHAT_ID = 'YOUR_CHAT_ID'; // Замените на ID чата
    
    const message = `
🔔 Новая заявка с сайта!

Тип: ${data.type || 'Звонок'}
Имя: ${data.name}
Телефон: ${data.phone}
${data.car ? 'Авто: ' + data.car : ''}
${data.message ? 'Сообщение: ' + data.message : ''}
    `.trim();
    
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
    }
}
*/
