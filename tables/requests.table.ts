// This file is auto-generated via createOrUpdateHeapTableFile API and should not be edited manually
import { Heap } from '@app/heap'

export const TAvtozapchastiVladikavkazRequestsJei = Heap.Table(
  't_avtozapchasti_vladikavkaz_requests_jei',
  {
    name: Heap.Optional(Heap.String({ customMeta: { title: 'Имя клиента' } })),
    phone: Heap.Optional(Heap.String({ customMeta: { title: 'Телефон' }, searchable: { langs: ['ru', 'en'] } })),
    licensePlate: Heap.Optional(Heap.String({ customMeta: { title: 'Госномер' } })),
    vin: Heap.Optional(Heap.String({ customMeta: { title: 'VIN-код' } })),
    carBrand: Heap.Optional(Heap.String({ customMeta: { title: 'Марка авто' } })),
    carModel: Heap.Optional(Heap.String({ customMeta: { title: 'Модель авто' } })),
    articleNumber: Heap.Optional(Heap.String({ customMeta: { title: 'Артикул запчасти' } })),
    searchType: Heap.Optional(
      Heap.Enum(
        { enumKey1: 'licensePlate', enumKey2: 'vin', enumKey3: 'model', enumKey4: 'article' },
        { customMeta: { title: 'Тип поиска' } },
      ),
    ),
    comment: Heap.Optional(Heap.String({ customMeta: { title: 'Комментарий' } })),
    franchiseeId: Heap.Optional(Heap.String({ customMeta: { title: 'ID франчайзи' } })),
    utmSource: Heap.Optional(Heap.String({ customMeta: { title: 'UTM Source' } })),
    utmMedium: Heap.Optional(Heap.String({ customMeta: { title: 'UTM Medium' } })),
    utmCampaign: Heap.Optional(Heap.String({ customMeta: { title: 'UTM Campaign' } })),
    status: Heap.Optional(
      Heap.Enum(
        { enumKey1: 'new', enumKey2: 'processing', enumKey3: 'completed', enumKey4: 'cancelled' },
        { customMeta: { title: 'Статус' } },
      ),
    ),
  },
  {
    customMeta: { title: 'Заявки на подбор запчастей', description: 'Заявки клиентов на подбор и заказ автозапчастей' },
  },
)

// declaration merging: allows using table-related types via default import
export declare namespace TAvtozapchastiVladikavkazRequestsJei {
  export type T = typeof TAvtozapchastiVladikavkazRequestsJei.T
  export type JsonT = typeof TAvtozapchastiVladikavkazRequestsJei.JsonT
  export type PropsT = typeof TAvtozapchastiVladikavkazRequestsJei.PropsT
  export type PatchT = typeof TAvtozapchastiVladikavkazRequestsJei.PatchT
  export type CreateInputT = typeof TAvtozapchastiVladikavkazRequestsJei.CreateInputT
}

export default TAvtozapchastiVladikavkazRequestsJei

export type TAvtozapchastiVladikavkazRequestsJeiRow = TAvtozapchastiVladikavkazRequestsJei.T
export type TAvtozapchastiVladikavkazRequestsJeiRowJson = TAvtozapchastiVladikavkazRequestsJei.JsonT
