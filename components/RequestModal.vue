<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="close"
      >
        <div class="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          <div v-if="!isSuccess" class="p-6 sm:p-8">
            <div class="flex items-start justify-between mb-5">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 leading-tight">
                  <EditableText content-key="modal_form_title" default-value="Заявка на подбор запчастей" />
                </h3>
                <p class="text-sm text-gray-500 mt-1">
                  <EditableText content-key="modal_form_subtitle" default-value="Специалист перезвонит в течение 15 минут" />
                </p>
              </div>
              <button
                class="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition shrink-0"
                @click="close"
                type="button"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Как к вам обращаться"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  Телефон <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  @input="onPhoneInput"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Марка и модель авто</label>
                <input
                  v-model="form.car"
                  type="text"
                  placeholder="Например: Toyota Camry 2018"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Комментарий</label>
                <textarea
                  v-model="form.comment"
                  rows="3"
                  placeholder="Какие запчасти нужны? Артикул, VIN или описание"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <div class="flex items-start gap-2.5">
                <input
                  id="modal-consent"
                  v-model="form.consent"
                  type="checkbox"
                  class="w-5 h-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0"
                  required
                />
                <label for="modal-consent" class="text-xs text-gray-600 leading-relaxed">
                  Согласен на обработку персональных данных
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <i class="fas fa-spinner fa-spin"></i>
                  Отправка...
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <i class="fas fa-paper-plane"></i>
                  Отправить заявку
                </span>
              </button>
            </form>
          </div>

          <div v-else class="p-8 text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <i class="fas fa-check text-3xl text-green-600"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              <EditableText content-key="modal_success_title" default-value="Заявка принята!" />
            </h3>
            <p class="text-gray-600 mb-6">
              <EditableText content-key="modal_success_desc" default-value="Специалист свяжется с вами в течение 15 минут" />
            </p>
            <div class="flex gap-3">
              <button
                class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
                @click="close"
                type="button"
              >
                Закрыть
              </button>
              <a
                :href="`tel:${PHONE_TEL}`"
                class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <i class="fas fa-phone"></i>
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import EditableText from './EditableText.vue'
import { submitRequestRoute } from '../api/requests/submit'
import { OPEN_REQUEST_MODAL_EVENT } from '../shared/requestModalBus'
import { PHONE_TEL } from '../shared/contacts'

const isOpen = ref(false)
const isSuccess = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  name: '',
  phone: '',
  car: '',
  comment: '',
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

const open = (e: Event) => {
  const detail = (e as CustomEvent).detail as { initialComment?: string } | undefined
  if (detail?.initialComment) form.comment = detail.initialComment
  isOpen.value = true
  isSuccess.value = false
  document.body.style.overflow = 'hidden'
}

const close = () => {
  isOpen.value = false
  document.body.style.overflow = ''
  setTimeout(() => {
    if (!isOpen.value) {
      isSuccess.value = false
      form.name = ''
      form.phone = ''
      form.car = ''
      form.comment = ''
      form.consent = false
    }
  }, 300)
}

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
      searchType: 'model',
      name: form.name,
      carBrand: form.car,
      carModel: '',
      comment: form.comment,
      utmSource: utm.source,
      utmMedium: utm.medium,
      utmCampaign: utm.campaign,
      uid: (window as any).clrtUid || '',
    })
    if (result.success) {
      isSuccess.value = true
    } else {
      alert('Ошибка отправки. Позвоните нам напрямую.')
    }
  } catch (e) {
    alert('Произошла ошибка. Позвоните нам напрямую.')
  } finally {
    isSubmitting.value = false
  }
}

const openHandler = (e: Event) => open(e)

onMounted(() => {
  window.addEventListener(OPEN_REQUEST_MODAL_EVENT, openHandler)
})

onUnmounted(() => {
  window.removeEventListener(OPEN_REQUEST_MODAL_EVENT, openHandler)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active > div,
.modal-fade-leave-active > div {
  transition: transform 0.25s ease;
}
.modal-fade-enter-from > div,
.modal-fade-leave-to > div {
  transform: scale(0.95) translateY(10px);
}
</style>