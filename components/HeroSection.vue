<template>
  <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"></div>
      <div class="absolute inset-0 bg-cover bg-center opacity-30" :style="{ backgroundImage: `url(${heroImage})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="text-white lg:col-span-7">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur rounded-full text-sm font-medium mb-6 border border-orange-500/30">
            <span class="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <EditableText content-key="hero_badge" default-value="Офис в Беслане · Доставка по РСО-А" />
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] mb-6">
            <EditableText content-key="hero_title" default-value="Продажа автозапчастей для иномарок в Беслане" />
          </h1>

          <p class="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            <EditableText content-key="hero_subtitle" default-value="Купите запчасти из наличия и под заказ для легковых и грузовых автомобилей" />
          </p>

          <div class="grid sm:grid-cols-3 gap-3 mb-9">
            <div class="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3">
              <div class="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                <i class="fas fa-truck text-orange-300"></i>
              </div>
              <div class="text-sm leading-tight">
                <p class="font-semibold">
                  <EditableText content-key="hero_utp1_title" default-value="Доставим от 1 часа" />
                </p>
                <p class="text-white/60 text-xs">
                  <EditableText content-key="hero_utp1_desc" default-value="по Беслану и окрестностям" />
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3">
              <div class="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                <i class="fas fa-warehouse text-orange-300"></i>
              </div>
              <div class="text-sm leading-tight">
                <p class="font-semibold">
                  <EditableText content-key="hero_utp2_title" default-value="Собственные склады" />
                </p>
                <p class="text-white/60 text-xs">
                  <EditableText content-key="hero_utp2_desc" default-value="120 000+ позиций" />
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3">
              <div class="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                <i class="fas fa-globe text-orange-300"></i>
              </div>
              <div class="text-sm leading-tight">
                <p class="font-semibold">
                  <EditableText content-key="hero_utp3_title" default-value="Охват 150+ городов" />
                </p>
                <p class="text-white/60 text-xs">
                  <EditableText content-key="hero_utp3_desc" default-value="федеральная сеть" />
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <button
              @click="openRequest"
              type="button"
              class="inline-flex items-center gap-2 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/40"
            >
              <i class="fas fa-search"></i>
              <EditableText content-key="hero_btn_request" default-value="Заявка на подбор" />
            </button>
            <a
              :href="WHATSAPP_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition"
            >
              <i class="fab fa-whatsapp text-lg"></i>
              <EditableText content-key="hero_btn_whatsapp" default-value="Написать в WhatsApp" />
            </a>
            <a
              :href="CATALOG_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-6 py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              <i class="fas fa-th-large"></i>
              <EditableText content-key="hero_btn_catalog" default-value="Перейти в каталог" />
            </a>
            <a
              :href="`tel:${PHONE_TEL}`"
              class="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white rounded-xl font-bold transition"
            >
              <i class="fas fa-phone"></i>
              <span>{{ PHONE_NUMBER }}</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl">
            <h3 class="text-xl font-bold text-white mb-1">
              <EditableText content-key="hero_form_title" default-value="Быстрый подбор по госномеру" />
            </h3>
            <p class="text-sm text-white/70 mb-5">
              <EditableText content-key="hero_form_subtitle" default-value="Введите номер — перезвоним за 15 минут" />
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-white/80 mb-2">Госномер авто</label>
                <input
                  v-model="form.licensePlate"
                  type="text"
                  placeholder="А123БВ777"
                  class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors uppercase"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-white/80 mb-2">Телефон</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  @input="onPhoneInput"
                  class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div class="flex items-start gap-2">
                <input
                  id="hero-consent"
                  v-model="form.consent"
                  type="checkbox"
                  class="w-5 h-5 mt-0.5 rounded border-white/30 bg-white/10 text-orange-500 focus:ring-orange-500"
                  required
                />
                <label for="hero-consent" class="text-xs text-white/70 leading-relaxed">
                  Соглашаюсь с обработкой персональных данных
                </label>
              </div>

              <button
                type="submit"
                class="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <i class="fas fa-spinner fa-spin"></i>
                  <span>Отправка...</span>
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <i class="fas fa-search"></i>
                  <span>Подобрать запчасти</span>
                </span>
              </button>
            </form>

            <p class="text-center text-xs text-white/60 mt-4">
              <EditableText content-key="hero_form_note" default-value="Специалист перезвонит в течение 15 минут" />
            </p>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="showSuccess" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4" @click="showSuccess = false">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl" @click.stop>
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-2xl text-green-600"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Заявка принята!</h3>
          <p class="text-gray-600 mb-6">Специалист свяжется с вами в течение 15 минут</p>
          <div class="flex gap-3">
            <button
              class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              @click="showSuccess = false"
              type="button"
            >
              Закрыть
            </button>
            <a
              :href="`tel:${PHONE_TEL}`"
              class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <i class="fas fa-phone"></i>
              <span>Позвонить</span>
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EditableText from './EditableText.vue'
import { submitRequestRoute } from '../api/requests/submit'
import { openRequestModal } from '../shared/requestModalBus'
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL, CATALOG_URL } from '../shared/contacts'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const heroImage = 'https://slt.cdn-chatium.io/get/image_msk_Jl3mCxiK2E.1376x768.png'

const form = reactive({
  licensePlate: '',
  phone: '',
  consent: false,
})

const formatPhone = (raw: string) => {
  const digits = raw.replace(/\D/g, '').slice(0, 11)
  if (!digits) return ''
  let normalized = digits
  if (normalized.startsWith('8')) normalized = '7' + normalized.slice(1)
  if (!normalized.startsWith('7')) normalized = '7' + normalized
  const p = normalized
  let out = '+7'
  if (p.length > 1) out += ' (' + p.slice(1, 4)
  if (p.length >= 4) out += ')'
  if (p.length >= 5) out += ' ' + p.slice(4, 7)
  if (p.length >= 8) out += '-' + p.slice(7, 9)
  if (p.length >= 10) out += '-' + p.slice(9, 11)
  return out
}

const onPhoneInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  form.phone = formatPhone(target.value)
}

const openRequest = () => openRequestModal('Заявка с главного экрана')

const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return {
    source: urlParams.get('utm_source') || '',
    medium: urlParams.get('utm_medium') || '',
    campaign: urlParams.get('utm_campaign') || '',
  }
}

const handleSubmit = async () => {
  if (!form.consent) {
    alert('Подтвердите согласие на обработку данных')
    return
  }
  isSubmitting.value = true
  try {
    const utm = getUtmParams()
    const result = await submitRequestRoute.run(ctx, {
      phone: form.phone,
      licensePlate: form.licensePlate.toUpperCase(),
      searchType: 'licensePlate',
      name: '',
      utmSource: utm.source,
      utmMedium: utm.medium,
      utmCampaign: utm.campaign,
      uid: (window as any).clrtUid || '',
    })
    if (result.success) {
      showSuccess.value = true
      form.licensePlate = ''
      form.phone = ''
      form.consent = false
    }
  } catch (error) {
    alert('Произошла ошибка. Позвоните нам напрямую.')
  } finally {
    isSubmitting.value = false
  }
}
</script>