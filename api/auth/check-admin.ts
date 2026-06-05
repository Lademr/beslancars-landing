import { requireAccountRole } from '@app/auth'

export const checkAdminRoute = app.post('/', async (ctx) => {
  try {
    requireAccountRole(ctx, 'Admin')
    return { isAdmin: true }
  } catch {
    return { isAdmin: false }
  }
})
