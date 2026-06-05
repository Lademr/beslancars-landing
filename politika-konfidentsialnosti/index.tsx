import { jsx } from "@app/html-jsx"

export const privacyPolicyRoute = app.get('/', async (ctx, req) => {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Политика конфиденциальности — Beslan Cars</title>
        <meta name="description" content="Политика обработки персональных данных интернет-магазина автозапчастей Beslan Cars" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://info.beslancars.ru/politika-konfidentsialnosti/" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
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
                }
              }
            }
          }
        `}</script>
      </head>
      <body class="font-sans antialiased text-gray-800 bg-gray-50">
        <div class="min-h-screen">
          <header class="bg-primary text-white py-4">
            <div class="max-w-4xl mx-auto px-4">
              <a href="/" class="text-white hover:text-blue-200 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                Вернуться на главную
              </a>
            </div>
          </header>
          
          <main class="max-w-4xl mx-auto px-4 py-12">
            <h1 class="text-3xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>
            
            <div class="bg-white rounded-lg shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
                <p>Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую ИП/ООО «Beslan Cars» (далее — Оператор) может получить о пользователе во время использования сайта info.beslancars.ru.</p>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">2. Основные понятия</h2>
                <ul class="list-disc pl-5 space-y-2">
                  <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                  <li><strong>Обработка персональных данных</strong> — любое действие с персональными данными, совершаемое с использованием средств автоматизации или без их использования.</li>
                  <li><strong>Конфиденциальность персональных данных</strong> — обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">3. Какие данные мы собираем</h2>
                <p>Оператор может собирать следующие персональные данные:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Фамилию, имя, отчество;</li>
                  <li>Номер телефона;</li>
                  <li>Адрес электронной почты;</li>
                  <li>Информацию о транспортном средстве (VIN, госномер, марка, модель);</li>
                  <li>Данные о местоположении (при необходимости доставки);</li>
                  <li>Информацию о действиях на сайте (cookies, IP-адрес).</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">4. Цели обработки данных</h2>
                <p>Персональные данные обрабатываются в следующих целях:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Идентификации пользователя для оформления заказа;</li>
                  <li>Подбора автозапчастей по характеристикам автомобиля;</li>
                  <li>Обработки заявок и обратной связи;</li>
                  <li>Доставки товаров;</li>
                  <li>Отправки уведомлений о статусе заказа;</li>
                  <li>Улучшения качества работы сайта;</li>
                  <li>Отправки маркетинговых материалов (с согласия пользователя).</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">5. Правовые основания обработки</h2>
                <p>Оператор обрабатывает персональные данные на следующих правовых основаниях:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Согласие субъекта персональных данных;</li>
                  <li>Необходимость исполнения договора, стороной которого является субъект персональных данных;</li>
                  <li>Необходимость выполнения требований законодательства РФ.</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">6. Порядок обработки данных</h2>
                <p>Оператор обеспечивает защиту персональных данных путем:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Использования современных методов шифрования;</li>
                  <li>Ограничения доступа к данным;</li>
                  <li>Регулярного обновления защитных систем;</li>
                  <li>Проведения аудитов безопасности.</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">7. Передача данных третьим лицам</h2>
                <p>Персональные данные могут быть переданы третьим лицам только в следующих случаях:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Службам доставки для осуществления доставки заказа;</li>
                  <li>Партнерам для подбора запчастей (при необходимости);</li>
                  <li>Государственным органам в случаях, предусмотренных законодательством.</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">8. Права субъекта данных</h2>
                <p>Субъект персональных данных имеет право:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                  <li>Получать информацию об обработке своих персональных данных;</li>
                  <li>Требовать уточнения, блокировки или уничтожения данных;</li>
                  <li>Отзывать согласие на обработку данных;</li>
                  <li>Обжаловать действия Оператора в уполномоченный орган.</li>
                </ul>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">9. Сроки хранения данных</h2>
                <p>Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, или в течение срока, установленного законодательством РФ. По достижении целей обработки или истечении сроков данные подлежат уничтожению.</p>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">10. Контактная информация</h2>
                <p>По всем вопросам, связанным с обработкой персональных данных, можно обратиться:</p>
                <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Email:</strong> beslanaws@gmail.com</p>
                  <p><strong>Телефон:</strong> +7 (918) 708-20-23</p>
                  <p><strong>Адрес:</strong> РСО-Алания, г. Беслан, ул. Нартовская, 23А</p>
                </div>
              </section>
              
              <section>
                <h2 class="text-xl font-semibold text-gray-900 mb-4">11. Изменения политики</h2>
                <p>Оператор имеет право вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента размещения на сайте, если иное не предусмотрено новой редакцией.</p>
                <p class="mt-4 text-sm text-gray-500">Последнее обновление: 15 января 2025 г.</p>
              </section>
            </div>
          </main>
          
          <footer class="bg-gray-900 text-white py-8 mt-12">
            <div class="max-w-4xl mx-auto px-4 text-center">
              <p class="text-gray-400">© 2025 Beslan Cars. Все права защищены.</p>
              <a href="/" class="text-blue-400 hover:text-blue-300 mt-2 inline-block">Вернуться на главную</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
})
