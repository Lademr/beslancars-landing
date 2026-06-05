<template>
  <section id="prices" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
          <EditableText content-key="prices_badge" default-value="Прайс-лист" />
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <EditableText content-key="prices_title" default-value="Популярные позиции и цены" />
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          <EditableText content-key="prices_subtitle" default-value="Указаны базовые цены — точную стоимость уточняйте у менеджера для конкретного авто" />
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(group, gi) in groupedPrices"
          :key="group.category"
          class="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all flex flex-col"
        >
          <div class="p-6 border-b border-gray-100">
            <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center" :class="categoryStyle(gi).bg">
              <i :class="['text-xl', categoryStyle(gi).icon, categoryStyle(gi).color]"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900">
              <EditableText :content-key="`price_cat_${group.category}_title`" :default-value="group.title" />
            </h3>
          </div>
          </div>

          <div class="flex-1 p-6">
            <div class="space-y-3">
              <div
                v-for="item in group.items"
                :key="item.id"
                class="flex items-start justify-between gap-3 py-2 border-b border-dashed border-gray-200 last:border-0"
              >
                <div class="min-w-0">
                  <p class="font-medium text-gray-900 text-sm leading-snug">{{ item.name }}</p>
                  <p class="text-xs text-gray-500 mt-0.5">{{ item.unit }}</p>
                </div>
                <div class="text-right shrink-0">
                  <p class="text-xs text-gray-500 leading-none">от</p>
                  <p class="font-bold text-blue-700 whitespace-nowrap">{{ formatPrice(item.priceFrom) }} ₽</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button
              @click="openRequest(group.title)"
              class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              type="button"
            >
              <i class="fas fa-search"></i>
              <EditableText content-key="prices_btn_help" default-value="Помочь с подбором" />
            </button>
          </div>
        </div>
      </div>

      <div v-if="loading" class="text-center py-10 text-gray-400">
        <i class="fas fa-spinner fa-spin text-2xl"></i>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import EditableText from './EditableText.vue'
import { openRequestModal } from '../shared/requestModalBus'
import { listPricesRoute } from '../api/prices/list'

interface PriceItem {
  id: string
  category: string
  categoryTitle: string
  name: string
  unit: string
  priceFrom: number
  sortOrder: number
}

const items = ref<PriceItem[]>([])
const loading = ref(true)

const formatPrice = (v: number) => v.toLocaleString('ru-RU')

const categoryStyle = (index: number) => {
  const styles = [
    { bg: 'bg-blue-100', color: 'text-blue-600', icon: 'fas fa-oil-can' },
    { bg: 'bg-orange-100', color: 'text-orange-600', icon: 'fas fa-fill-drip' },
    { bg: 'bg-green-100', color: 'text-green-600', icon: 'fas fa-cog' },
  ]
  return styles[index % styles.length]!
}

const groupedPrices = computed(() => {
  const map = new Map<string, { category: string; title: string; items: PriceItem[] }>()
  for (const it of items.value) {
    if (!map.has(it.category)) {
      map.set(it.category, { category: it.category, title: it.categoryTitle, items: [] })
    }
    map.get(it.category)!.items.push(it)
  }
  return Array.from(map.values())
})

const openRequest = (categoryTitle: string) => {
  openRequestModal(`Подбор по категории: ${categoryTitle}`)
}

onMounted(async () => {
  try {
    const data = await listPricesRoute.run(ctx)
    items.value = data as any
  } catch (e) {
    console.error('Failed to load prices', e)
  } finally {
    loading.value = false
  }
})
</script>