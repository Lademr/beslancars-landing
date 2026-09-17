# 🚗 Beslan Cars - Лендинг автозапчастей для GitHub Pages

Современный лендинг для компании по продаже и доставке автозапчастей в Северной Осетии.

## 🌟 Особенности

- **Статический сайт** - работает на GitHub Pages без backend
- **Vue.js 3** - реактивный интерфейс через CDN
- **Tailwind CSS** - современная стилизация
- **Полная SEO-оптимизация** - мета-теги, Schema.org, sitemap
- **Аналитика** - Яндекс.Метрика и Google Analytics
- **Формы связи** - WhatsApp, Telegram, заявка на сайте
- **Блог** - встроенная система статей
- **Отзывы** - блок с отзывами клиентов
- **Адаптивный дизайн** - отлично смотрится на всех устройствах

## 📁 Структура проекта

```
beslan-cars/
├── index.html                          # Главная страница (лендинг)
├── politika-konfidentsialnosti/
│   └── index.html                      # Политика конфиденциальности
├── spasibo/
│   └── index.html                      # Страница благодарности
├── assets/                             # Папка для изображений
├── robots.txt                          # Правила для поисковиков
└── sitemap.xml                         # Карта сайта
```

## 🚀 Развертывание на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub
```bash
# Инициализируйте git (если еще не инициализирован)
git init
git add .
git commit -m "Initial commit"
```

### Шаг 2: Подключите удаленный репозиторий
```bash
git remote add origin https://github.com/YOUR_USERNAME/beslan-cars.git
git branch -M main
git push -u origin main
```

### Шаг 3: Включите GitHub Pages
1. Зайдите в настройки репозитория (Settings)
2. Перейдите в раздел "Pages"
3. В разделе "Source" выберите ветку `main` и папку `/ (root)`
4. Нажмите "Save"

Через 1-2 минуты сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/beslan-cars/
```

## ⚙️ Настройка под ваш проект

### 1. Обновите контактные данные в `index.html`:
```javascript
// Найдите в секции <script> и замените:
phone: '+79990000000',        // Ваш телефон
telegram: '@beslancars',      // Ваш Telegram
```

### 2. Обновите ссылки в мета-тегах:
```html
<!-- Замените YOUR_USERNAME на ваш логин GitHub -->
<meta property="og:url" content="https://YOUR_USERNAME.github.io/beslan-cars/">
<link rel="canonical" href="https://YOUR_USERNAME.github.io/beslan-cars/">
```

### 3. Настройте аналитику:
```html
<!-- Yandex.Metrika - замените на ваш ID -->
ym(92916804, "init", {...});

<!-- Google Analytics - замените на ваш ID -->
gtag('config', 'G-XXXXXXXXXX');
```

### 4. Настройте отправку форм (опционально):

#### Вариант A: Formspree (бесплатно до 50 заявок/мес)
1. Зарегистрируйтесь на [formspree.io](https://formspree.io)
2. Создайте новую форму
3. Замените метод отправки в `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Вариант B: Отправка в Telegram
1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите токен бота
3. Узнайте chat_id через [@userinfobot](https://t.me/userinfobot)
4. Раскомментируйте код в методе `sendToTelegram()`

### 5. Добавьте свои изображения:
1. Положите фото в папку `assets/`
2. Обновите пути в `index.html`:
```html
<img src="/assets/your-photo.jpg" alt="Описание">
```

## 🎨 Цветовая схема

Цвета взяты с сайта партнера all-world-cars.com:

- **Primary**: `#1a56db` (синий)
- **Secondary**: `#1e40af` (темно-синий)
- **Accent**: `#f59e0b` (оранжевый)
- **Dark**: `#1f2937` (темно-серый)

## 📝 Добавление статей в блог

Найдите массив `blogPosts` в `index.html` и добавьте новые статьи:

```javascript
blogPosts: [
    {
        id: 4,
        category: 'Ремонт',
        title: 'Как заменить тормозные колодки',
        excerpt: 'Пошаговая инструкция по замене тормозных колодок...',
        date: '20 января 2024',
        content: '<p>Полный текст статьи...</p>'
    }
]
```

## 📝 Добавление отзывов

Найдите массив `reviews` в `index.html` и добавьте новые отзывы:

```javascript
reviews: [
    {
        id: 4,
        name: 'Имя Фамилия',
        city: 'Город',
        rating: 5,
        text: 'Текст отзыва...'
    }
]
```

## 🔧 Дополнительные возможности

### Локальный запуск
Просто откройте `index.html` в браузере или используйте Live Server в VS Code.

### Кастомный домен
1. Купите домен
2. В настройках GitHub Pages укажите домен
3. Создайте файл `CNAME` с именем домена

## 📞 Контакты

- **Сайт партнер**: https://all-world-cars.com/?FranchiseeId=157358060
- **Регион**: Северная Осетия - Алания
- **Доставка**: от 2 часов до 5 дней
- **Бесплатная доставка**: от 5000₽

## 📄 Лицензия

Этот проект создан для компании Beslan Cars.

---

**Готово!** 🎉 Ваш лендинг готов к работе на GitHub Pages!
