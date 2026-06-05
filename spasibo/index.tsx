import { jsx } from "@app/html-jsx"

export const thankYouRoute = app.get('/')
  .query(s => ({ source: s.string().optional() }))
  .handle(async (ctx, req) => {
  const source = req.query.source || 'default'
  
  const titles: Record<string, string> = {
    'request': 'Заявка принята!',
    'vin': 'Заявка на подбор по VIN принята!',
    'default': 'Спасибо!',
  }
  
  const messages: Record<string, string> = {
    'request': 'Мы получили вашу заявку на подбор запчастей. Наш менеджер свяжется с вами в течение 15 минут.',
    'vin': 'Мы получили ваш запрос на подбор запчастей по VIN. Наш менеджер свяжется с вами в ближайшее время.',
    'default': 'Ваше обращение успешно отправлено. Мы свяжемся с вами в ближайшее время.',
  }
  
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{titles[source] || titles.default} — Beslan Cars</title>
        <meta name="description" content="Спасибо за обращение в Beslan Cars. Мы свяжемся с вами в ближайшее время." />
        <meta name="robots" content="noindex, follow" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        
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
                  accent: '#10B981',
                }
              }
            }
          }
        `}</script>
        
        <style>{`
          @keyframes checkmark {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .animate-checkmark {
            animation: checkmark 0.5s ease-out forwards;
          }
        `}</style>
        
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
          
          window.onload = function() {
            if (typeof ym !== 'undefined') {
              ym(109613212, 'reachGoal', 'form_success');
            }
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', { 'send_to': 'G-ZJ14VKETR9/form_success' });
            }
          };
        `}</script>
      </head>
      <body class="font-sans antialiased text-gray-900 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center">
        <div class="max-w-lg w-full mx-4">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {titles[source] || titles.default}
            </h1>
            
            <p class="text-gray-600 mb-8 leading-relaxed">
              {messages[source] || messages.default}
            </p>
            
            <div class="space-y-4">
              <a 
                href="/" 
                class="block w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Вернуться на главную
              </a>
              
              <a 
                href="https://wa.me/79187082023" 
                target="_blank"
                class="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </a>
            </div>
            
            <div class="mt-8 pt-6 border-t border-gray-100">
              <p class="text-sm text-gray-500 mb-2">Остались вопросы? Позвоните нам:</p>
              <a href="tel:+79187082023" class="text-lg font-semibold text-primary hover:text-primary-dark transition-colors">
                +7 (918) 708-20-23
              </a>
            </div>
          </div>
          
          <div class="text-center mt-6 text-sm text-gray-500">
            <p>© 2025 Beslan Cars — автозапчасти в Беслане и Владикавказе</p>
          </div>
        </div>
      </body>
    </html>
  )
})
