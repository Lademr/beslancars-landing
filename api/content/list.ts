import ContentTable from '../../tables/content.table'

export const listContentRoute = app.get('/', async (ctx) => {
  const items = await ContentTable.findAll(ctx, {
    limit: 1000
  })
  
  const contentMap: Record<string, string> = {}
  for (const item of items) {
    if (item.key) {
      contentMap[item.key] = item.value || ''
    }
  }
  
  return contentMap
})
