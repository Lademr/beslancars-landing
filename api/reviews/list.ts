import Reviews from '../../tables/reviews.table'

export const listReviewsRoute = app.get('/', async (ctx, req) => {
  const reviews = await Reviews.findAll(ctx, {
    where: {
      isActive: true,
    },
    order: [{ createdAt: 'desc' }],
    limit: 20,
  })

  return reviews.map(r => ({
    id: r.id,
    name: r.name,
    city: r.city,
    text: r.text,
    rating: r.rating,
    date: r.date,
  }))
})
