<template>
  <footer id="contacts" class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <div class="lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-8 sm:p-10">
          <span class="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <EditableText content-key="footer_banner_badge" default-value="Огромный ассортимент" />
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <EditableText content-key="footer_banner_title" default-value="Более 120 000 позиций" />
            <span class="block text-orange-400">
              <EditableText content-key="footer_banner_title2" default-value="запчастей в наличии" />
            </span>
          </h2>
          <p class="text-white/70 text-lg mb-7">
            <EditableText content-key="footer_banner_desc" default-value="Для легковых и грузовых иномарок. Доставка по Беслану и Северной Осетии." />
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              :href="WHATSAPP_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
            >
              <i class="fab fa-whatsapp"></i>
              <span>Написать в WhatsApp</span>
            </a>
            <a
              :href="MAP_ROUTE_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition border border-white/20"
            >
              <i class="fas fa-route"></i>
              <span>Построить маршрут</span>
            </a>
            <button
              @click="openRequest"
              type="button"
              class="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition shadow-lg shadow-orange-500/30"
            >
              <i class="fas fa-search"></i>
              <span>Подобрать запчасти</span>
            </button>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-xs font-bold text-green-400 uppercase tracking-wider">
              <EditableText content-key="footer_new_order_badge" default-value="Новый заказ" />
            </span>
          </div>
          <Transition name="order-fade" mode="out-in">
            <div :key="currentOrder.id" class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <i class="fas fa-shopping-bag text-blue-300"></i>
                </div>
                <div class="min-w-0">
                  <p class="font-semibold text-sm truncate">
                    <EditableText :content-key="`fake_order_${currentOrder.id}_name`" :default-value="currentOrder.name" />
                  </p>
                  <p class="text-xs text-white/60 truncate">
                    <EditableText :content-key="`fake_order_${currentOrder.id}_city`" :default-value="currentOrder.city" />
                  </p>
                </div>
              </div>
              <div class="bg-white/5 rounded-xl p-3">
                <p class="text-xs text-white/70 mb-1">
                  <EditableText content-key="footer_new_order_label" default-value="Заказал:" />
                </p>
                <p class="text-sm font-medium">
                  <EditableText :content-key="`fake_order_${currentOrder.id}_product`" :default-value="currentOrder.product" />
                </p>
                <p class="text-xs text-white/50 mt-1">
                  <EditableText :content-key="`fake_order_${currentOrder.id}_time`" :default-value="currentOrder.timeAgo" />
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <EditableText content-key="footer_logo" default-value="ВС">
                <span class="text-white font-bold">ВС</span>
              </EditableText>
            </div>
            <div>
              <p class="font-bold text-sm">
                <EditableText content-key="footer_brand" default-value="Beslan Cars" />
              </p>
              <p class="text-xs text-white/50">
                <EditableText content-key="footer_location" default-value="Беслан, РСО-Алания" />
              </p>
            </div>
          </div>
          <p class="text-sm text-white/60 leading-relaxed">
            <EditableText content-key="footer_about" default-value="Официальный партнёр федеральной сети по продаже автозапчастей." />
          </p>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-white">
            <EditableText content-key="footer_nav_title" default-value="Навигация" />
          </h4>
          <ul class="space-y-2 text-sm">
            <li v-for="link in navLinks" :key="link.href">
              <EditableText :content-key="`footer_nav_${link.href.slice(1)}`" :default-value="link.label">
                <a :href="link.href" class="text-white/60 hover:text-orange-400 transition">{{ link.label }}</a>
              </EditableText>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-white">
            <EditableText content-key="footer_contacts_title" default-value="Контакты" />
          </h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2.5">
              <i class="fas fa-phone text-orange-400 mt-1"></i>
              <EditableText content-key="footer_phone" default-value="+7 (918) 708-20-23">
                <a :href="`tel:${PHONE_TEL}`" class="text-white/80 hover:text-white transition">{{ PHONE_NUMBER }}</a>
              </EditableText>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fas fa-map-marker-alt text-orange-400 mt-1"></i>
              <span class="text-white/80">
                <EditableText content-key="footer_address" :default-value="ADDRESS" />
              </span>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fas fa-clock text-orange-400 mt-1"></i>
              <span class="text-white/80">
                <EditableText content-key="footer_hours" default-value="Пн-Пт: 9:00–18:00, Сб: 10:00–15:00" />
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-white">
            <EditableText content-key="footer_messengers_title" default-value="Мессенджеры" />
          </h4>
          <div class="flex gap-3">
            <a
              :href="WHATSAPP_URL"
              target="_blank"
              rel="noopener"
              class="w-11 h-11 rounded-xl bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white flex items-center justify-center transition"
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              :href="TELEGRAM_URL"
              target="_blank"
              rel="noopener"
              class="w-11 h-11 rounded-xl bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white flex items-center justify-center transition"
              aria-label="Telegram"
            >
              <i class="fab fa-telegram text-xl"></i>
            </a>
          </div>
          <p class="text-xs text-white/50 mt-4">
            <EditableText content-key="footer_response" default-value="Отвечаем в течение 15 минут" />
          </p>
        </div>
      </div>

      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>
          <EditableText content-key="footer_copyright" default-value="© 2025 All World Cars Беслан. Все права защищены." />
        </p>
        <p>
          <EditableText content-key="footer_legal" default-value="ООО Инфобанк · ОГРН 1071511001726 · ИНН 1511016370" />
        </p>
      </div>
    </div>

    <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl p-3 grid grid-cols-3 gap-2">
      <a :href="`tel:${PHONE_TEL}`" class="flex flex-col items-center gap-1 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold text-xs">
        <i class="fas fa-phone"></i>
        <EditableText content-key="mobile_btn_call" default-value="Позвонить" />
      </a>
      <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="flex flex-col items-center gap-1 py-2 rounded-xl bg-green-50 text-green-700 font-semibold text-xs">
        <i class="fab fa-whatsapp"></i>
        <EditableText content-key="mobile_btn_whatsapp" default-value="WhatsApp" />
      </a>
      <button @click="openRequest" type="button" class="flex flex-col items-center gap-1 py-2 rounded-xl bg-orange-50 text-orange-700 font-semibold text-xs">
        <i class="fas fa-search"></i>
        <EditableText content-key="mobile_btn_request" default-value="Подбор" />
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import EditableText from './EditableText.vue'
import { openRequestModal } from '../shared/requestModalBus'
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL, TELEGRAM_URL, ADDRESS, MAP_ROUTE_URL } from '../shared/contacts'

const openRequest = () => openRequestModal('Заявка с футера')

const navLinks = [
  { label: 'Варианты подбора', href: '#selection' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Прайс-лист', href: '#prices' },
  { label: 'Отзывы', href: '#reviews' },
]

interface OrderItem {
  id: number
  name: string
  city: string
  product: string
  timeAgo: string
}

const fakeOrders: OrderItem[] = [
  { id: 1, name: 'Алан', city: 'Беслан, РСО-А', product: 'Масляный фильтр Toyota Camry', timeAgo: '2 минуты назад' },
  { id: 2, name: 'Марат', city: 'Владикавказ, РСО-А', product: 'Тормозные колодки Hyundai Solaris', timeAgo: '5 минут назад' },
  { id: 3, name: 'Заур', city: 'Беслан, РСО-А', product: 'Амортизатор Lada Vesta', timeAgo: '8 минут назад' },
  { id: 4, name: 'Тамерлан', city: 'Алагир, РСО-А', product: 'Свечи зажигания Kia Rio', timeAgo: '11 минут назад' },
  { id: 5, name: 'Ахсар', city: 'Ардон, РСО-А', product: 'Антифриз G12 (1л)', timeAgo: '14 минут назад' },
  { id: 6, name: 'Сослан', city: 'Беслан, РСО-А', product: 'Воздушный фильтр Ford Focus', timeAgo: '17 минут назад' },
  { id: 7, name: 'Батраз', city: 'Моздок, РСО-А', product: 'Стойка стабилизатора VW Polo', timeAgo: '20 минут назад' },
]

const currentIndex = ref(0)
const currentOrder = ref<OrderItem>(fakeOrders[0]!)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % fakeOrders.length
    const next = fakeOrders[currentIndex.value]
    if (next) currentOrder.value = next
  }, 4500)
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
</script>

<style scoped>
.order-fade-enter-active,
.order-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.order-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.order-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>