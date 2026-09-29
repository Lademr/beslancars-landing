# Beslan Cars — лендинг автозапчастей (beslancars.ru)

Статический SEO-лендинг для продажи и доставки автозапчастей по Северной Осетии. Работает на GitHub Pages без сервера.

## Контакты (реальные данные)
- Телефон/WhatsApp: +7 (918) 708-20-23
- Telegram: @zapchasti_beslan
- Email: All-World-Cars-Beslan@yandex.ru
- ПВЗ: г. Беслан, ул. Нартовская, 23А
- Домен: https://beslancars.ru

## Структура
```
index.html          — главная (Schema.org LocalBusiness + FAQPage)
blog.html           — страница блога
blog/*.html         — статьи под региональные запросы
spasibo.html        — страница спасибо
privacy.html        — политика конфиденциальности
sitemap.xml         — карта сайта (beslancars.ru)
robots.txt          — индексация
CNAME               — привязка домена beslancars.ru
assets/logo.svg     — логотип
css/style.css       — стили (фирменные цвета #0056b3 / #ff6600)
js/main.js          — формы, отзывы, меню
```

## Настройка GitHub Pages
1. Settings → Pages → Source: Deploy from a branch → `master` / `(root)`.
2. Включите **Custom domain** через файл CNAME (уже в корне).
3. У регистратора домена beslancars.ru настройте DNS:
   - `A`-записи: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` для www → username.github.io
4. Enforce HTTPS после выпуска сертификата.

## Что осталось сделать вручную
- [ ] Вписать ID Яндекс.Метрики вместо `XXXXXXX` (index.html, spasibo.html, privacy.html)
- [ ] Вписать ID Google Analytics вместо `G-YOURGAID`
- [ ] Положить реальные фото ПВЗ в `assets/images/pvz-photo.jpg` и `og-image.jpg`
- [ ] Подключить отправку форм (Telegram-бот / Formspree) — заготовка в js/main.js
- [ ] Добавить Yandex Verification / Google Search Console

## Публикация новой статьи
1. Скопируйте любой файл из `blog/` как шаблон.
2. Замените title, description, canonical, текст и JSON-LD Article.
3. Добавьте ссылку в `blog.html`, блок «Полезные статьи» в `index.html` и в `sitemap.xml`.
