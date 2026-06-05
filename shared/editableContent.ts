// @shared
import { ref, reactive } from 'vue'

// Singleton state — загружается один раз для всей страницы
export const isAdmin = ref(false)
export const content = reactive<Record<string, string>>({})
export const shiftHeld = ref(false)
export const editMode = ref(false)

let loadingStarted = false
let globalListenersSetup = false

export function ensureLoaded(): void {
  if (loadingStarted) return
  loadingStarted = true

  Promise.all([
    fetch('/avtozapchasti-vladikavkaz/api/auth/check-admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    })
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (data?.isAdmin === true) isAdmin.value = true
      })
      .catch(() => {}),

    fetch('/avtozapchasti-vladikavkaz/api/content/list')
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (data && typeof data === 'object') Object.assign(content, data)
      })
      .catch(() => {}),
  ])
}

export function ensureGlobalListeners(): void {
  if (globalListenersSetup || typeof window === 'undefined') return
  globalListenersSetup = true
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Shift') shiftHeld.value = true
    // Esc выключает режим редактирования
    if (e.key === 'Escape' && editMode.value) editMode.value = false
  })
  window.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.key === 'Shift') shiftHeld.value = false
  })
  window.addEventListener('blur', () => {
    shiftHeld.value = false
  })
}

export async function saveContent(key: string, value: string): Promise<void> {
  const res = await fetch('/avtozapchasti-vladikavkaz/api/content/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, value }),
  })
  if (!res.ok) throw new Error('Ошибка сохранения')
  content[key] = value
}
