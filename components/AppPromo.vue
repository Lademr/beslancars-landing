<template>
  <section id="app-promo" class="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-white">
          <span class="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-5 border border-orange-500/30">
            <EditableText content-key="app_badge" default-value="Мобильное приложение AWC Бонус" />
          </span>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            <EditableText content-key="app_title" default-value="В приложении" />
            <span class="block text-orange-400">
              <EditableText content-key="app_title_accent" default-value="Кэшбэк до 7%" />
            </span>
          </h2>

          <p class="text-lg text-white/80 mb-8 leading-relaxed">
            <EditableText content-key="app_desc" default-value="Скачивайте AWC Бонус и возвращайте до 7% от каждой покупки. Копите бонусы и оплачивайте ими до 99% заказа." />
          </p>

          <div class="space-y-4 mb-8">
            <div v-for="(f, idx) in features" :key="idx" class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <i :class="f.icon" class="text-orange-300"></i>
              </div>
              <div>
                <h4 class="font-semibold mb-0.5">
                  <EditableText :content-key="`app_feature${idx+1}_title`" :default-value="f.title" />
                </h4>
                <p class="text-sm text-white/70">
                  <EditableText :content-key="`app_feature${idx+1}_desc`" :default-value="f.desc" />
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <a
            href="https://apps.apple.com/ru/app/awc-бонус/id1574089762"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-3 px-5 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            <i class="fab fa-apple text-2xl"></i>
            <div class="text-left leading-tight">
              <div class="text-[10px] opacity-60">
                <EditableText content-key="app_store_label" default-value="Загрузите в" />
              </div>
              <div class="font-bold text-sm">
                <EditableText content-key="app_store_name" default-value="App Store" />
              </div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.awc.bonus"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-3 px-5 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            <i class="fab fa-google-play text-xl"></i>
            <div class="text-left leading-tight">
              <div class="text-[10px] opacity-60">
                <EditableText content-key="google_play_label" default-value="Загрузите в" />
              </div>
              <div class="font-bold text-sm">
                <EditableText content-key="google_play_name" default-value="Google Play" />
              </div>
            </div>
          </a>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="bg-white rounded-3xl p-6 shadow-2xl max-w-xs">
              <div class="text-center mb-4">
                <p class="font-bold text-gray-900 text-lg">
                  <EditableText content-key="qr_title" default-value="Отсканируйте QR-код" />
                </p>
                <p class="text-sm text-gray-500 mt-1">
                  <EditableText content-key="qr_subtitle" default-value="Камерой телефона" />
                </p>
              </div>
              <div class="bg-white p-2 rounded-2xl border-4 border-gray-100">
                <img
                  src="https://app.msk.chatium.io/api/1.0/qr?text=https%3A%2F%2Fall-world-cars.com%2Fapp"
                  alt="QR-код для скачивания AWC Бонус"
                  class="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-xl text-center">
                <p class="text-xs text-orange-800 font-semibold">
                  <i class="fas fa-gift mr-1"></i>
                  <EditableText content-key="qr_bonus" default-value="500 бонусов на первый заказ" />
                </p>
              </div>
            </div>

            <div class="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl transform rotate-12">
              <div class="text-white text-center leading-tight">
                <div class="text-xs font-medium">до</div>
                <div class="text-2xl font-bold">7%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EditableText from './EditableText.vue'

const features = [
  { icon: 'fas fa-percentage', title: 'Кэшбэк до 7%', desc: 'С каждой покупки на бонусный счёт' },
  { icon: 'fas fa-history', title: 'История заказов', desc: 'Все ваши покупки в одном месте' },
  { icon: 'fas fa-bell', title: 'Уведомления о статусе', desc: 'Знайте, когда ждать вашу запчасть' },
]
</script>