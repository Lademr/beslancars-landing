// This file is auto-generated via createOrUpdateHeapTableFile API and should not be edited manually
import { Heap } from '@app/heap'

export const TAvtozapchastiVladikavkazContentJRa = Heap.Table(
  't_avtozapchasti_vladikavkaz_content_jRa',
  {
    key: Heap.Optional(Heap.String({ customMeta: { title: 'Ключ' }, searchable: { langs: ['ru', 'en'] } })),
    value: Heap.Optional(Heap.String({ customMeta: { title: 'Значение' } })),
    section: Heap.Optional(Heap.String({ customMeta: { title: 'Секция' } })),
  },
  { customMeta: { title: 'Контент сайта', description: 'Тексты для редактирования на лендинге' } },
)

// declaration merging: allows using table-related types via default import
export declare namespace TAvtozapchastiVladikavkazContentJRa {
  export type T = typeof TAvtozapchastiVladikavkazContentJRa.T
  export type JsonT = typeof TAvtozapchastiVladikavkazContentJRa.JsonT
  export type PropsT = typeof TAvtozapchastiVladikavkazContentJRa.PropsT
  export type PatchT = typeof TAvtozapchastiVladikavkazContentJRa.PatchT
  export type CreateInputT = typeof TAvtozapchastiVladikavkazContentJRa.CreateInputT
}

export default TAvtozapchastiVladikavkazContentJRa

export type TAvtozapchastiVladikavkazContentJRaRow = TAvtozapchastiVladikavkazContentJRa.T
export type TAvtozapchastiVladikavkazContentJRaRowJson = TAvtozapchastiVladikavkazContentJRa.JsonT
