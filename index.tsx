import { jsx } from "@app/html-jsx"
import LandingPage from './pages/LandingPage.vue'

export const landingPageRoute = app.get('/')
  .query(s => ({
    utm_source: s.string().optional(),
    utm_medium: s.string().optional(),
    utm_campaign: s.string().optional(),
  }))
  .handle(async (ctx, req) => {
    const utmSource = req.query.utm_source || ''
    const utmMedium = req.query.utm_medium || ''
    const utmCampaign = req.query.utm_campaign || ''

    const host = 'beslanaws.chatium.ru'

  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>Автозапчасти в Беслане и Владикавказе — интернет-магазин Beslan Cars | Доставка запчастей по РСО-Алания</title>
        <meta name="description" content="Автозапчасти в Беслане и Владикавказе с доставкой на дом. Интернет-магазин автозапчастей Beslan Cars: 120 000+ позиций для иномарок, подбор по госномеру и VIN, заказ запчастей онлайн. Доставка по Владикавказу и РСО-Алания от 1 часа. Телефон: +7 (918) 708-20-23." />
        <meta name="keywords" content="автозапчасти, автозапчасти в беслане, автозапчасти владикавказ, автозапчасти владикавказ телефон, автозапчасти с доставкой на дом, автозапчасти интернет, автозапчасти телефон, доставка запчастей, заказ доставка запчастей, заказать автозапчасти, интернет магазин автозапчастей, магазин автозапчастей, магазин автозапчастей владикавказ, запчасти беслан, запчасти владикавказ, купить автозапчасти владикавказ, автозапчасти северная осетия" />
        <meta name="author" content="Beslan Cars" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <meta name="theme-color" content="#1E40AF" />
        <meta name="format-detection" content="telephone=yes" />

        <meta name="geo.region" content="RU-SE" />
        <meta name="geo.placename" content="Беслан, Владикавказ" />
        <meta name="geo.position" content="43.1907;44.5328" />
        <meta name="ICBM" content="43.1907, 44.5328" />

        <meta property="og:title" content="Автозапчасти в Беслане и Владикавказе — Beslan Cars | Доставка запчастей" />
        <meta property="og:description" content="Интернет-магазин автозапчастей. 120 000+ позиций для иномарок. Подбор по госномеру и VIN. Доставка по Владикавказу и Беслану от 1 часа. Кэшбэк до 7%." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Beslan Cars — автозапчасти" />
        <meta property="og:url" content={`https://${host}/avtozapchasti-vladikavkaz`} />
        <meta property="og:image" content="https://slt.cdn-chatium.io/get/image_msk_Jl3mCxiK2E.1376x768.png" />
        <meta property="og:image:width" content="1376" />
        <meta property="og:image:height" content="768" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Автозапчасти в Беслане и Владикавказе — Beslan Cars" />
        <meta name="twitter:description" content="Интернет-магазин автозапчастей. Доставка по Владикавказу и Беслану от 1 часа. Подбор по госномеру и VIN." />
        <meta name="twitter:image" content="https://slt.cdn-chatium.io/get/image_msk_Jl3mCxiK2E.1376x768.png" />

        <link rel="canonical" href={`https://${host}/avtozapchasti-vladikavkaz`} />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            "@id": "https://${host}/avtozapchasti-vladikavkaz#store",
            "name": "Beslan Cars — автозапчасти в Беслане и Владикавказе",
            "alternateName": ["Беслан Карс", "Магазин автозапчастей Beslan Cars"],
            "description": "Интернет-магазин автозапчастей в Беслане и Владикавказе. Доставка запчастей на дом по всей РСО-Алания. 120 000+ позиций для иномарок.",
            "url": "https://${host}/avtozapchasti-vladikavkaz",
            "telephone": "+7-918-708-20-23",
            "email": "vcdv@mail.ru",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Нартовская, 23А",
              "addressLocality": "Беслан",
              "addressRegion": "Республика Северная Осетия-Алания",
              "postalCode": "363029",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.1907,
              "longitude": 44.5328
            },
            "areaServed": [
              { "@type": "City", "name": "Беслан" },
              { "@type": "City", "name": "Владикавказ" },
              { "@type": "AdministrativeArea", "name": "Республика Северная Осетия-Алания" }
            ],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "15:00" }
            ],
            "priceRange": "₽₽",
            "image": "https://slt.cdn-chatium.io/get/image_msk_Jl3mCxiK2E.1376x768.png",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Каталог автозапчастей",
              "itemListElement": [
                { "@type": "OfferCatalog", "name": "Запчасти для ТО" },
                { "@type": "OfferCatalog", "name": "Технические жидкости" },
                { "@type": "OfferCatalog", "name": "Подвеска и ходовая" },
                { "@type": "OfferCatalog", "name": "Тормозная система" },
                { "@type": "OfferCatalog", "name": "Двигатель и электрика" }
              ]
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-918-708-20-23",
              "contactType": "customer service",
              "areaServed": "RU",
              "availableLanguage": ["Russian"]
            },
            "sameAs": [
              "https://wa.me/79187082023",
              "https://t.me/+79187082023"
            ]
          }
        `}</script>

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Где купить автозапчасти в Беслане и Владикавказе?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Магазин автозапчастей Beslan Cars расположен в Беслане на улице Нартовская, 23А. Мы доставляем запчасти во Владикавказ и по всей РСО-Алания. Заказать автозапчасти можно по телефону +7 (918) 708-20-23 или через интернет-магазин."
                }
              },
              {
                "@type": "Question",
                "name": "Есть ли доставка автозапчастей на дом?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Да. Мы организуем доставку автозапчастей на дом по Беслану, Владикавказу и всей Северной Осетии. По городу доставка от 1 часа. Заказ доставки запчастей оформляется при покупке."
                }
              },
              {
                "@type": "Question",
                "name": "Как заказать автозапчасти онлайн?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Заказать автозапчасти можно через наш интернет-магазин: введите госномер или VIN, оставьте заявку — менеджер перезвонит в течение 15 минут. Также можно позвонить по телефону +7 (918) 708-20-23."
                }
              },
              {
                "@type": "Question",
                "name": "Какой телефон автозапчастей во Владикавказе?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Телефон магазина автозапчастей Beslan Cars: +7 (918) 708-20-23. Принимаем заказы из Владикавказа, Беслана и других городов РСО-Алания."
                }
              },
              {
                "@type": "Question",
                "name": "Сколько позиций автозапчастей в наличии?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "В нашем интернет-магазине автозапчастей более 120 000 позиций для легковых и грузовых иномарок. Мы работаем с собственными складами и федеральной сетью поставщиков в 150+ городах."
                }
              }
            ]
          }
        `}</script>

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://${host}/avtozapchasti-vladikavkaz",
            "name": "Beslan Cars — автозапчасти в Беслане и Владикавказе",
            "inLanguage": "ru-RU"
          }
        `}</script>

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://${host}/avtozapchasti-vladikavkaz" },
              { "@type": "ListItem", "position": 2, "name": "Автозапчасти Владикавказ", "item": "https://${host}/avtozapchasti-vladikavkaz#prices" }
            ]
          }
        `}</script>
        
        <script>{`
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  sans: ['Montserrat', 'system-ui', 'sans-serif'],
                },
                colors: {
                  primary: '#1E40AF',
                  'primary-dark': '#1E3A8A',
                  secondary: '#3B82F6',
                  accent: '#10B981',
                  'accent-dark': '#059669',
                }
              }
            }
          }
        `}</script>
        
        <script src="/s/metric/clarity.js"></script>
        
        <script type="text/javascript">{`
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109613212', 'ym');
          
          ym(109613212, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
        `}</script>
        <noscript><div><img src="https://mc.yandex.ru/watch/109613212" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJ14VKETR9"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZJ14VKETR9');
        `}</script>
        
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }
          
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}</style>
      </head>
      <body class="font-sans antialiased text-gray-900 bg-white">
        <LandingPage 
          utmSource={utmSource}
          utmMedium={utmMedium}
          utmCampaign={utmCampaign}
        />
      </body>
    </html>
  )
})
