// @shared

// Глобальное событие для открытия модалки заявки
export const OPEN_REQUEST_MODAL_EVENT = 'awc:open-request-modal'

export function openRequestModal(initialComment?: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(OPEN_REQUEST_MODAL_EVENT, {
    detail: { initialComment: initialComment || '' },
  }))
}
