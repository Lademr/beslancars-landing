import { requireAccountRole } from '@app/auth'
import ContentTable from '../../tables/content.table'

export const updateContentRoute = app.post('/')
  .body(s => ({
    key: s.string(),
    value: s.string()
  }))
  .handle(async (ctx, req) => {
    requireAccountRole(ctx, 'Admin')
    
    const existing = await ContentTable.findOneBy(ctx, { key: req.body.key })
    
    if (existing) {
      await ContentTable.update(ctx, {
        id: existing.id,
        value: req.body.value
      })
    } else {
      await ContentTable.create(ctx, {
        key: req.body.key,
        value: req.body.value,
        section: 'general'
      })
    }
    
    return { success: true }
  })
