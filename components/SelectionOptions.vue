<template>
  <section id="selection" class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
          <EditableText content-key="selection_badge" default-value="Два простых пути" />
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <EditableText content-key="selection_title" default-value="Варианты подбора запчастей" />
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          <EditableText content-key="selection_subtitle" default-value="Выберите удобный для вас способ — поможем профессионально подобрать нужные детали" />
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div class="bg-white rounded-3xl p-7 sm:p-8 border-2 border-blue-100 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
          <div class="flex items-center gap-4 mb-7">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shrink-0">
              <i class="fas fa-headset text-white text-xl"></i>
            </div>
            <div>
              <p class="text-xs font-bold text-blue-600 uppercase tracking-wider">Вариант 1</p>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                <EditableText content-key="selection_v1_title" default-value="С помощью менеджера" />
              </h3>
            </div>
          </div>

          <p class="text-gray-600 mb-6">
            <EditableText content-key="selection_v1_desc" default-value="Расскажите о своём авто — наш специалист подберёт всё за вас и проверит наличие" />
          </p>

          <div class="space-y-4 mb-8">
            <div v-for="(step, idx) in v1Steps" :key="`v1-${idx}`" class="flex gap-4">
              <div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                {{ idx + 1 }}
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">
                  <EditableText :content-key="`selection_v1_step${idx+1}_title`" :default-value="step.title" />
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <EditableText :content-key="`selection_v1_step${idx+1}_desc`" :default-value="step.desc" />
                </p>
              </div>
            </div>
          </div>

          <button
            @click="openRequest"
            class="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
            type="button"
          >
            <i class="fas fa-paper-plane"></i>
            <EditableText content-key="selection_v1_btn" default-value="Оставить заявку на подбор" />
          </button>
        </div>

        <div class="bg-white rounded-3xl p-7 sm:p-8 border-2 border-orange-100 shadow-xl shadow-orange-500/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all">
          <div class="flex items-center gap-4 mb-7">
            <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <i class="fas fa-mouse-pointer text-white text-xl"></i>
            </div>
            <div>
              <p class="text-xs font-bold text-orange-600 uppercase tracking-wider">Вариант 2</p>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                <EditableText content-key="selection_v2_title" default-value="Самостоятельный подбор" />
              </h3>
            </div>
          </div>

          <p class="text-gray-600 mb-6">
            <EditableText content-key="selection_v2_desc" default-value="Воспользуйтесь нашим онлайн-каталогом из 120 000+ позиций с фильтрами по авто" />
          </p>

          <div class="space-y-4 mb-8">
            <div v-for="(step, idx) in v2Steps" :key="`v2-${idx}`" class="flex gap-4">
              <div class="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                {{ idx + 1 }}
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">
                  <EditableText :content-key="`selection_v2_step${idx+1}_title`" :default-value="step.title" />
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <EditableText :content-key="`selection_v2_step${idx+1}_desc`" :default-value="step.desc" />
                </p>
              </div>
            </div>
          </div>

          <a
            :href="CATALOG_URL"
            target="_blank"
            rel="noopener"
            class="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <i class="fas fa-external-link-alt"></i>
            <EditableText content-key="selection_v2_btn" default-value="Перейти в каталог" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EditableText from './EditableText.vue'
import { openRequestModal } from '../shared/requestModalBus'
import { CATALOG_URL } from '../shared/contacts'

const openRequest = () => openRequestModal('Помогите подобрать запчасти')

const v1Steps = [
  { title: 'Заполните заявку', desc: 'Укажите марку, модель авто и какие запчасти нужны' },
  { title: 'Обработка заявки', desc: 'Менеджер проверит наличие и предложит варианты' },
  { title: 'Получите результат', desc: 'Отправим список запчастей с ценами и сроками' },
  { title: 'Оформление заказа', desc: 'Подтвердите заказ — мы доставим или отгрузим в офис' },
]

const v2Steps = [
  { title: 'Перейдите в каталог', desc: 'Откройте онлайн-каталог из 120 000+ позиций' },
  { title: 'Укажите авто', desc: 'Выберите марку, модель, год и модификацию' },
  { title: 'Подберите детали', desc: 'Найдите нужные запчасти по фильтрам и характеристикам' },
  { title: 'Оформите заказ', desc: 'Добавьте в корзину и оформите доставку или самовывоз' },
]
</script>