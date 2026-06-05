<template>
  <section id="seo-info" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg max-w-none">
        <header class="mb-10 text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            <EditableText
              content-key="seo_h2_main"
              default-value="Автозапчасти в Беслане и Владикавказе — интернет-магазин Beslan Cars"
            />
          </h2>
          <p class="text-lg text-gray-600">
            <EditableText
              content-key="seo_lead"
              default-value="Магазин автозапчастей Beslan Cars — это интернет-магазин автозапчастей для иномарок в Беслане и Владикавказе с доставкой запчастей на дом по всей Республике Северная Осетия — Алания. Заказать автозапчасти можно по телефону +7 (918) 708-20-23 или онлайн."
            />
          </p>
        </header>

        <article class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 class="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <i class="fas fa-map-marker-alt text-orange-500"></i>
              <EditableText
                content-key="seo_h3_beslan"
                default-value="Автозапчасти в Беслане"
              />
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <EditableText
                content-key="seo_text_beslan"
                default-value="Наш офис и склад находятся в Беслане по адресу ул. Нартовская, 23А. Мы продаём автозапчасти из наличия и под заказ для легковых и грузовых иномарок. В магазине автозапчастей Beslan Cars доступно более 120 000 позиций. Купить автозапчасти в Беслане можно с самовывозом или с доставкой на дом от 1 часа."
              />
            </p>
          </div>

          <div class="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <h3 class="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
              <i class="fas fa-city text-orange-500"></i>
              <EditableText
                content-key="seo_h3_vladikavkaz"
                default-value="Автозапчасти Владикавказ — доставка на дом"
              />
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <EditableText
                content-key="seo_text_vladikavkaz"
                default-value="Доставляем автозапчасти во Владикавказ ежедневно. Заказать запчасти из Беслана во Владикавказ можно по телефону +7 (918) 708-20-23 — это телефон автозапчастей во Владикавказе и Беслане. Курьерская доставка автозапчастей по Владикавказу — от 1 часа. Привезём до подъезда или в автосервис."
              />
            </p>
          </div>
        </article>

        <article class="mb-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            <EditableText
              content-key="seo_h3_internet"
              default-value="Интернет-магазин автозапчастей: заказать онлайн"
            />
          </h3>
          <p class="text-gray-700 leading-relaxed mb-3">
            <EditableText
              content-key="seo_text_internet1"
              default-value="Beslan Cars — это интернет-магазин автозапчастей для всех марок иномарок. На сайте вы можете заказать автозапчасти онлайн: введите госномер или VIN автомобиля, отправьте заявку — наш менеджер свяжется с вами в течение 15 минут и подберёт нужные детали."
            />
          </p>
          <p class="text-gray-700 leading-relaxed">
            <EditableText
              content-key="seo_text_internet2"
              default-value="Преимущества интернет-магазина автозапчастей Beslan Cars: точный подбор по госномеру и VIN, прозрачные цены, оригинальные запчасти и проверенные аналоги, кэшбэк до 7%, гарантия качества. Заказ доставки запчастей оформляется в один клик."
            />
          </p>
        </article>

        <article class="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            <EditableText
              content-key="seo_h3_delivery"
              default-value="Доставка запчастей по РСО-Алания"
            />
          </h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            <EditableText
              content-key="seo_text_delivery"
              default-value="Мы организуем доставку автозапчастей на дом и в автосервисы по всей Северной Осетии: Владикавказ, Беслан, Алагир, Ардон, Дигора, Моздок и другие города. По Беслану и Владикавказу — доставка от 1 часа. По районам РСО-Алания — день в день или на следующий день."
            />
          </p>
          <ul class="grid sm:grid-cols-2 gap-2 text-gray-700">
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 mt-1"></i>
              <EditableText content-key="seo_list_1" default-value="Доставка автозапчастей на дом во Владикавказе" />
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 mt-1"></i>
              <EditableText content-key="seo_list_2" default-value="Доставка запчастей по Беслану от 1 часа" />
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 mt-1"></i>
              <EditableText content-key="seo_list_3" default-value="Заказ доставки запчастей по всей РСО-Алания" />
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 mt-1"></i>
              <EditableText content-key="seo_list_4" default-value="Самовывоз из офиса в Беслане, ул. Нартовская, 23А" />
            </li>
          </ul>
        </article>

        <article class="mb-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            <EditableText
              content-key="seo_h3_phone"
              default-value="Телефон автозапчастей во Владикавказе и Беслане"
            />
          </h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            <EditableText
              content-key="seo_text_phone"
              default-value="Связаться с магазином автозапчастей Beslan Cars можно по телефону +7 (918) 708-20-23. Это единый номер для всех клиентов из Владикавказа, Беслана и других городов республики. Также доступна связь через WhatsApp и Telegram. Принимаем заказы автозапчастей по телефону, на сайте и в мессенджерах."
            />
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="tel:+79187082023"
              class="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              <i class="fas fa-phone"></i>
              <span>+7 (918) 708-20-23</span>
            </a>
            <a
              href="https://wa.me/79187082023"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
            >
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/+79187082023"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition"
            >
              <i class="fab fa-telegram"></i>
              <span>Telegram</span>
            </a>
          </div>
        </article>

        <article class="mb-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            <EditableText
              content-key="seo_h3_faq"
              default-value="Часто задаваемые вопросы об автозапчастях"
            />
          </h3>
          <div class="space-y-4">
            <details
              v-for="(item, idx) in faqList"
              :key="idx"
              class="group bg-white border border-gray-200 rounded-xl p-5 open:shadow-md transition-shadow"
            >
              <summary class="cursor-pointer flex justify-between items-center gap-4 font-semibold text-gray-900 list-none">
                <EditableText
                  :content-key="`faq_q_${idx}`"
                  :default-value="item.q"
                />
                <i class="fas fa-chevron-down text-gray-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p class="mt-3 text-gray-700 leading-relaxed">
                <EditableText
                  :content-key="`faq_a_${idx}`"
                  :default-value="item.a"
                />
              </p>
            </details>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EditableText from './EditableText.vue'

const faqList = [
  {
    q: 'Где купить автозапчасти в Беслане?',
    a: 'Магазин автозапчастей Beslan Cars находится в Беслане по адресу ул. Нартовская, 23А. Работаем с понедельника по пятницу с 9:00 до 18:00, в субботу — с 10:00 до 15:00.',
  },
  {
    q: 'Можно ли заказать автозапчасти с доставкой на дом во Владикавказ?',
    a: 'Да. Мы привозим автозапчасти на дом или в автосервис по Владикавказу и Беслану — от 1 часа после оформления заказа. По другим городам РСО-Алания доставка день в день или на следующий день.',
  },
  {
    q: 'Какой телефон автозапчастей во Владикавказе?',
    a: 'Единый телефон для заказа автозапчастей: +7 (918) 708-20-23. Принимаем звонки и сообщения в WhatsApp, Telegram. Менеджер перезвонит в течение 15 минут после заявки.',
  },
  {
    q: 'Как заказать автозапчасти в интернет-магазине?',
    a: 'Оставьте заявку на сайте: укажите госномер или VIN автомобиля, контактный телефон и комментарий. Также можно заказать запчасти онлайн через каталог или написать в WhatsApp.',
  },
  {
    q: 'Сколько стоит доставка запчастей?',
    a: 'Стоимость и сроки доставки запчастей зависят от адреса. По Беслану и Владикавказу — от 1 часа, цена обсуждается с менеджером. По районам республики — день в день.',
  },
  {
    q: 'Есть ли оригинальные автозапчасти в магазине?',
    a: 'Да, в нашем интернет-магазине автозапчастей более 120 000 позиций: оригинальные запчасти от производителей, а также качественные аналоги. Гарантия качества на все детали.',
  },
]
</script>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}
</style>