import Prices from '../../tables/prices.table'

export const listPricesRoute = app.get('/', async (ctx) => {
  const items = await Prices.findAll(ctx, {
    limit: 200,
    order: [{ sortOrder: 'asc' }],
  })
  return items
})
