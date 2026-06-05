// This file is auto-generated via createOrUpdateHeapTableFile API and should not be edited manually
import { Heap } from '@app/heap'

export const TAvtozapchastiVladikavkazPrices3iV = Heap.Table(
  't_avtozapchasti_vladikavkaz_prices_3iV',
  {
    category: Heap.Optional(
      Heap.Enum(
        { enumKey1: 'maintenance', enumKey2: 'fluids', enumKey3: 'suspension' },
        { customMeta: { title: 'Категория' } },
      ),
    ),
    categoryTitle: Heap.Optional(Heap.String({ customMeta: { title: 'Название категории' } })),
    name: Heap.Optional(Heap.String({ customMeta: { title: 'Название позиции' } })),
    unit: Heap.Optional(Heap.String({ customMeta: { title: 'Единица измерения' } })),
    priceFrom: Heap.Optional(Heap.Number({ customMeta: { title: 'Цена от (руб.)' } })),
    sortOrder: Heap.Optional(Heap.Number({ customMeta: { title: 'Порядок сортировки' } })),
  },
  { customMeta: { title: 'Прайс-лист', description: 'Категории и позиции прайс-листа на запчасти' } },
)

// declaration merging: allows using table-related types via default import
export declare namespace TAvtozapchastiVladikavkazPrices3iV {
  export type T = typeof TAvtozapchastiVladikavkazPrices3iV.T
  export type JsonT = typeof TAvtozapchastiVladikavkazPrices3iV.JsonT
  export type PropsT = typeof TAvtozapchastiVladikavkazPrices3iV.PropsT
  export type PatchT = typeof TAvtozapchastiVladikavkazPrices3iV.PatchT
  export type CreateInputT = typeof TAvtozapchastiVladikavkazPrices3iV.CreateInputT
}

export default TAvtozapchastiVladikavkazPrices3iV

export type TAvtozapchastiVladikavkazPrices3iVRow = TAvtozapchastiVladikavkazPrices3iV.T
export type TAvtozapchastiVladikavkazPrices3iVRowJson = TAvtozapchastiVladikavkazPrices3iV.JsonT
