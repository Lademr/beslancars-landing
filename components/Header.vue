<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-3">
        <a href="#" class="flex items-center gap-3 shrink-0">
          <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">ВС</span>
          </div>
          <div class="hidden sm:block leading-tight">
            <p class="font-bold text-sm" :class="isScrolled ? 'text-gray-900' : 'text-white'">Beslan Cars</p>
            <p class="text-xs" :class="isScrolled ? 'text-blue-600' : 'text-blue-200'">
              <i class="fas fa-map-marker-alt mr-1"></i>
              <EditableText content-key="header_office" default-value="Беслан, ул. Нартовская, 23А" />
            </p>
          </div>
        </a>

        <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            class="text-sm font-medium transition-colors hover:text-orange-500"
            :class="isScrolled ? 'text-gray-700' : 'text-white/90'"
          >
            <EditableText :content-key="`header_menu_${item.id}`" :default-value="item.label" />
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <!-- Кнопка режима редактирования (только для Admin) -->
          <button
            v-if="isAdmin"
            @click="toggleEditMode"
            class="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all border"
            :class="editMode
              ? 'bg-orange-500 text-white border-orange-600 hover:bg-orange-600'
              : isScrolled
                ? 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
                : 'bg-orange-500/20 text-orange-200 border-orange-500/40 hover:bg-orange-500/30'"
            type="button"
            :title="editMode ? 'Выйти из режима редактирования (Esc)' : 'Включить режим редактирования'"
          >
            <i :class="editMode ? 'fas fa-eye' : 'fas fa-pen-to-square'" class="text-sm"></i>
            <span class="hidden xl:inline">{{ editMode ? 'Просмотр' : 'Редактировать' }}</span>
          </button>

          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener"
            class="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center transition"
            :class="isScrolled ? 'bg-green-50 text-green-600 hover:bg-green-100' : 'bg-white/10 text-white hover:bg-white/20'"
            aria-label="WhatsApp"
          >
            <i class="fab fa-whatsapp text-lg"></i>
          </a>
          <a
            :href="TELEGRAM_URL"
            target="_blank"
            rel="noopener"
            class="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center transition"
            :class="isScrolled ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-white/10 text-white hover:bg-white/20'"
            aria-label="Telegram"
          >
            <i class="fab fa-telegram text-lg"></i>
          </a>
          <a
            :href="`tel:${PHONE_TEL}`"
            class="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all text-sm"
            :class="isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-900 hover:bg-gray-100'"
          >
            <i class="fas fa-phone text-sm"></i>
            <span class="hidden xl:inline">{{ PHONE_NUMBER }}</span>
            <span class="xl:hidden">Звонок</span>
          </a>
          <button
            class="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
            :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'"
            @click="isMobileMenuOpen = true"
            aria-label="Меню"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Панель режима редактирования -->
    <Transition name="edit-bar">
      <div
        v-if="isAdmin && editMode"
        class="bg-orange-500 text-white text-xs font-medium py-1.5 px-4 text-center"
      >
        <i class="fas fa-pen-to-square mr-2"></i>
        Режим редактирования активен — кликайте на любой текст для изменения
        <button @click="toggleEditMode" class="ml-3 underline hover:no-underline" type="button">Выйти (Esc)</button>
      </div>
    </Transition>

    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-black/50 z-50" @click="isMobileMenuOpen = false">
        <div class="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 overflow-y-auto" @click.stop>
          <div class="flex justify-between items-center mb-8">
            <span class="font-bold text-lg text-gray-900">Меню</span>
            <button class="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100" @click="isMobileMenuOpen = false" aria-label="Закрыть">
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>

          <!-- Кнопка режима редактирования в мобильном меню -->
          <button
            v-if="isAdmin"
            @click="toggleEditMode; isMobileMenuOpen = false"
            class="w-full flex items-center gap-3 px-4 py-3 mb-4 rounded-lg font-semibold text-sm transition"
            :class="editMode ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-700'"
            type="button"
          >
            <i :class="editMode ? 'fas fa-eye' : 'fas fa-pen-to-square'"></i>
            {{ editMode ? 'Выйти из редактирования' : 'Редактировать сайт' }}
          </button>

          <nav class="flex flex-col gap-1 mb-6">
            <a
              v-for="item in menuItems"
              :key="item.id"
              :href="item.href"
              class="text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-gray-50"
              @click="isMobileMenuOpen = false"
            >
              <EditableText :content-key="`header_menu_${item.id}`" :default-value="item.label" />
            </a>
          </nav>
          <div class="space-y-3">
            <a :href="`tel:${PHONE_TEL}`" class="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold">
              <i class="fas fa-phone"></i>
              <span>{{ PHONE_NUMBER }}</span>
            </a>
            <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="flex items-center gap-3 px-4 py-3 bg-green-500 text-white rounded-lg font-semibold">
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a :href="TELEGRAM_URL" target="_blank" rel="noopener" class="flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold">
              <i class="fab fa-telegram"></i>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import EditableText from './EditableText.vue'
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL, TELEGRAM_URL } from '../shared/contacts'
import { isAdmin, editMode, ensureLoaded, ensureGlobalListeners } from '../shared/editableContent'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { id: 'selection', label: 'Варианты подбора', href: '#selection' },
  { id: 'advantages', label: 'Преимущества', href: '#advantages' },
  { id: 'prices', label: 'Прайс-лист', href: '#prices' },
  { id: 'reviews', label: 'Отзывы', href: '#reviews' },
  { id: 'contacts', label: 'Контакты', href: '#contacts' },
]

const toggleEditMode = () => {
  editMode.value = !editMode.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  ensureLoaded()
  ensureGlobalListeners()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.edit-bar-enter-active,
.edit-bar-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}
.edit-bar-enter-from,
.edit-bar-leave-to {
  max-height: 0;
  opacity: 0;
}
.edit-bar-enter-to,
.edit-bar-leave-from {
  max-height: 40px;
  opacity: 1;
}
</style>