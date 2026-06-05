<template>
  <section id="advantages" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
          <EditableText content-key="advantages_badge" default-value="Наши преимущества" />
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <EditableText content-key="advantages_title" default-value="Почему выбирают нас" />
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          <EditableText content-key="advantages_subtitle" default-value="Четыре причины, по которым нам доверяют тысячи автовладельцев Северной Осетии" />
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div
          v-for="(adv, idx) in advantages"
          :key="idx"
          class="group bg-gradient-to-br from-gray-50 to-white p-7 rounded-3xl border border-gray-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all"
        >
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" :class="adv.bg">
            <i :class="['text-2xl', adv.icon, adv.color]"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">
            <EditableText :content-key="`adv${idx+1}_title`" :default-value="adv.title" />
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            <EditableText :content-key="`adv${idx+1}_desc`" :default-value="adv.desc" />
          </p>
        </div>
      </div>

      <div class="text-center">
        <button
          @click="openRequest"
          type="button"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <i class="fas fa-search"></i>
          <EditableText content-key="advantages_cta_btn" default-value="Подобрать запчасти" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EditableText from './EditableText.vue'
import { openRequestModal } from '../shared/requestModalBus'

const openRequest = () => openRequestModal('Заявка из секции преимуществ')

const advantages = [
  {
    icon: 'fas fa-shield-alt',
    bg: 'bg-blue-100',
    color: 'text-blue-600',
    title: 'Качество и надёжность',
    desc: 'Работаем только с проверенными производителями. На все детали — гарантия от производителя.',
  },
  {
    icon: 'fas fa-boxes-stacked',
    bg: 'bg-orange-100',
    color: 'text-orange-600',
    title: 'Большой ассортимент',
    desc: 'Более 120 000 позиций в наличии и доступ к 80+ млн артикулов под заказ.',
  },
  {
    icon: 'fas fa-bolt',
    bg: 'bg-green-100',
    color: 'text-green-600',
    title: 'Лёгкость заказа',
    desc: 'Подбор по госномеру, VIN или артикулу. Менеджер ответит за 15 минут.',
  },
  {
    icon: 'fas fa-medal',
    bg: 'bg-purple-100',
    color: 'text-purple-600',
    title: '10-летний опыт',
    desc: 'Тысячи довольных клиентов и десятки тысяч успешных заказов в Северной Осетии.',
  },
]
</script>