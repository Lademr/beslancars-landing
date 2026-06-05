// This file is auto-generated via createOrUpdateHeapTableFile API and should not be edited manually
import { Heap } from '@app/heap'

export const TAvtozapchastiVladikavkazReviewsE2T = Heap.Table(
  't_avtozapchasti_vladikavkaz_reviews_E2T',
  {
    name: Heap.Optional(Heap.String({ customMeta: { title: 'Имя клиента' } })),
    city: Heap.Optional(Heap.String({ customMeta: { title: 'Город' } })),
    text: Heap.Optional(Heap.String({ customMeta: { title: 'Текст отзыва' } })),
    rating: Heap.Optional(Heap.Number({ customMeta: { title: 'Оценка' } })),
    date: Heap.Optional(Heap.String({ customMeta: { title: 'Дата отзыва' } })),
    isActive: Heap.Optional(Heap.Boolean({ customMeta: { title: 'Активен' } })),
  },
  { customMeta: { title: 'Отзывы клиентов', description: 'Отзывы клиентов о работе сервиса' } },
)

// declaration merging: allows using table-related types via default import
export declare namespace TAvtozapchastiVladikavkazReviewsE2T {
  export type T = typeof TAvtozapchastiVladikavkazReviewsE2T.T
  export type JsonT = typeof TAvtozapchastiVladikavkazReviewsE2T.JsonT
  export type PropsT = typeof TAvtozapchastiVladikavkazReviewsE2T.PropsT
  export type PatchT = typeof TAvtozapchastiVladikavkazReviewsE2T.PatchT
  export type CreateInputT = typeof TAvtozapchastiVladikavkazReviewsE2T.CreateInputT
}

export default TAvtozapchastiVladikavkazReviewsE2T

export type TAvtozapchastiVladikavkazReviewsE2TRow = TAvtozapchastiVladikavkazReviewsE2T.T
export type TAvtozapchastiVladikavkazReviewsE2TRowJson = TAvtozapchastiVladikavkazReviewsE2T.JsonT
