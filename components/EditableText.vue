<template>
  <span
    class="editable-text"
    :class="{
      'editable-text--admin': isAdmin,
      'editable-text--editmode': isAdmin && editMode,
      'editable-text--shift': isAdmin && shiftHeld && !editMode,
    }"
    @click="handleClick"
    @dblclick="handleDblClick"
  >
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ displayValue }}</template>
    <button
      v-if="isAdmin && editMode"
      class="editable-pencil-btn"
      type="button"
      @click.stop.prevent="openModal"
      :title="`Редактировать: ${props.contentKey}`"
    >
      <i class="fas fa-pen"></i>
    </button>
  </span>

  <teleport to="body" v-if="isModalOpen">
    <div class="edit-modal-overlay" @click.self="cancel">
      <div class="edit-modal">
        <div class="edit-modal__header">
          <h3 class="edit-modal__title">
            <i class="fas fa-pen-to-square"></i>
            Редактирование текста
          </h3>
          <button class="edit-modal__close" type="button" @click="cancel" title="Закрыть">
            <i class="fas fa-xmark"></i>
          </button>
        </div>
        <div class="edit-modal__body">
          <label class="edit-modal__label">Ключ: <code>{{ props.contentKey }}</code></label>
          <textarea
            ref="textareaRef"
            v-model="editValue"
            class="edit-modal__textarea"
            rows="5"
            @keydown.esc="cancel"
            @keydown.enter.ctrl.exact="save"
            @keydown.enter.meta.exact="save"
          ></textarea>
          <div class="edit-modal__hint">
            <kbd>Ctrl</kbd> + <kbd>Enter</kbd> — сохранить, <kbd>Esc</kbd> — отмена
          </div>
        </div>
        <div class="edit-modal__footer">
          <button type="button" class="edit-modal__btn edit-modal__btn--secondary" @click="cancel">
            Отмена
          </button>
          <button type="button" class="edit-modal__btn edit-modal__btn--primary" :disabled="saving" @click="save">
            <i v-if="saving" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-check"></i>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import {
  isAdmin,
  content,
  shiftHeld,
  editMode,
  ensureLoaded,
  ensureGlobalListeners,
  saveContent,
} from '../shared/editableContent'

const props = defineProps<{
  contentKey: string
  defaultValue: string
}>()

const isModalOpen = ref(false)
const editValue = ref('')
const saving = ref(false)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const displayValue = computed(() => content[props.contentKey] ?? props.defaultValue)

const handleClick = (e: MouseEvent) => {
  if (!isAdmin.value) return
  if (editMode.value) {
    // В режиме редактирования — любой клик открывает модалку
    e.preventDefault()
    e.stopPropagation()
    openModal()
    return
  }
  // Без режима редактирования — только Shift+клик
  if (e.shiftKey) {
    e.preventDefault()
    e.stopPropagation()
    openModal()
  }
}

const handleDblClick = (e: MouseEvent) => {
  if (!isAdmin.value) return
  e.preventDefault()
  e.stopPropagation()
  openModal()
}

const openModal = () => {
  if (isModalOpen.value) return
  editValue.value = displayValue.value
  isModalOpen.value = true
  nextTick(() => {
    textareaRef.value?.focus()
    textareaRef.value?.select()
  })
}

const save = async () => {
  if (saving.value) return
  if (editValue.value === displayValue.value) {
    isModalOpen.value = false
    return
  }
  saving.value = true
  try {
    await saveContent(props.contentKey, editValue.value)
    isModalOpen.value = false
  } catch {
    alert('Ошибка сохранения. Проверьте права администратора.')
  } finally {
    saving.value = false
  }
}

const cancel = () => {
  if (saving.value) return
  isModalOpen.value = false
}

onMounted(() => {
  ensureLoaded()
  ensureGlobalListeners()
})
</script>

<style scoped>
.editable-text {
  display: inline;
  position: relative;
}

.editable-text--admin {
  border-radius: 3px;
  transition: background 0.1s, outline 0.1s;
}

.editable-text--admin:hover {
  background: rgba(59, 130, 246, 0.07);
  outline: 1px dashed rgba(59, 130, 246, 0.35);
  outline-offset: 2px;
  cursor: pointer;
}

.editable-text--shift {
  outline: 2px dashed rgba(59, 130, 246, 0.85) !important;
  outline-offset: 3px;
  background: rgba(59, 130, 246, 0.12) !important;
  cursor: pointer !important;
  user-select: none;
  -webkit-user-select: none;
}

.editable-text--editmode {
  outline: 2px dashed rgba(249, 115, 22, 0.7) !important;
  outline-offset: 3px;
  background: rgba(249, 115, 22, 0.06) !important;
  cursor: pointer !important;
  user-select: none;
  -webkit-user-select: none;
}

.editable-text--editmode:hover {
  outline-color: rgba(249, 115, 22, 1) !important;
  background: rgba(249, 115, 22, 0.12) !important;
}

.editable-pencil-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-left: 4px;
  vertical-align: middle;
  background: #f97316;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 9px;
  line-height: 1;
  opacity: 0;
  transition: opacity 0.15s;
  pointer-events: auto;
}

.editable-text--editmode:hover .editable-pencil-btn {
  opacity: 1;
}

.edit-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 16px;
  animation: fadeIn 0.15s ease;
}

.edit-modal {
  width: 100%;
  max-width: 560px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  animation: slideUp 0.2s ease;
  display: flex;
  flex-direction: column;
}

.edit-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: linear-gradient(90deg, #fff7ed, #ffffff);
}

.edit-modal__title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #9a3412;
  display: flex;
  align-items: center;
  gap: 10px;
}

.edit-modal__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  color: #6b7280;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.15s;
}

.edit-modal__close:hover {
  background: #f3f4f6;
  color: #111827;
}

.edit-modal__body {
  padding: 18px 20px;
}

.edit-modal__label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.edit-modal__label code {
  font-size: 12px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 1px 5px;
  color: #6b7280;
  font-family: ui-monospace, monospace;
}

.edit-modal__textarea {
  width: 100%;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: #111827;
  background: #f9fafb;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  min-height: 110px;
  box-sizing: border-box;
  transition: border-color 0.15s, background 0.15s;
}

.edit-modal__textarea:focus {
  border-color: #f97316;
  background: white;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
}

.edit-modal__hint {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
}

.edit-modal__hint kbd {
  display: inline-block;
  padding: 1px 6px;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  color: #374151;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-bottom-width: 2px;
  border-radius: 4px;
}

.edit-modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}

.edit-modal__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.edit-modal__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.edit-modal__btn--secondary {
  color: #374151;
  background: white;
  border: 1px solid #d1d5db;
}

.edit-modal__btn--secondary:hover:not(:disabled) {
  background: #f3f4f6;
}

.edit-modal__btn--primary {
  color: white;
  background: linear-gradient(135deg, #f97316, #ea580c);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);
}

.edit-modal__btn--primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(249, 115, 22, 0.45);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>