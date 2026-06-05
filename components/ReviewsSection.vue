<template>
  <section id="reviews" class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
          <EditableText content-key="reviews_badge" default-value="Реальные отзывы" />
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <EditableText content-key="reviews_title" default-value="Что говорят клиенты" />
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          <EditableText content-key="reviews_subtitle" default-value="Тысячи автовладельцев Северной Осетии уже доверяют нам подбор запчастей" />
        </p>
      </div>

      <div v-if="reviews.length > 0" class="relative max-w-4xl mx-auto">
        <div
          class="overflow-hidden"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
        >
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="w-full flex-shrink-0 px-2 sm:px-4"
            >
              <div class="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-xl shadow-blue-500/5">
                <div class="flex items-center gap-4 mb-5">
                  <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {{ review.name.charAt(0) }}
                  </div>
                  <div class="min-w-0 flex-1">
                    <h4 class="font-bold text-gray-900 truncate">
                      {{ review.name }}<span v-if="review.age" class="text-gray-500 font-normal">, {{ review.age }}</span>
                    </h4>
                    <p class="text-sm text-gray-500 truncate">
                      <i class="fas fa-map-marker-alt mr-1 text-xs"></i>{{ review.city }}
                    </p>
                  </div>
                  <div class="hidden sm:flex gap-0.5 shrink-0">
                    <i v-for="n in 5" :key="n" class="fas fa-star text-yellow-400 text-sm"></i>
                  </div>
                </div>
                <div class="flex sm:hidden gap-0.5 mb-3">
                  <i v-for="n in 5" :key="n" class="fas fa-star text-yellow-400 text-sm"></i>
                </div>
                <p class="text-gray-700 leading-relaxed text-base sm:text-lg">"{{ review.text }}"</p>
                <p class="text-sm text-gray-400 mt-5">{{ review.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-gray-600 hover:text-orange-500 hover:scale-110 transition-all"
          @click="prevSlide"
          type="button"
          aria-label="Предыдущий отзыв"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          class="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-gray-600 hover:text-orange-500 hover:scale-110 transition-all"
          @click="nextSlide"
          type="button"
          aria-label="Следующий отзыв"
        >
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in reviews"
            :key="index"
            class="rounded-full transition-all"
            :class="currentSlide === index ? 'w-8 h-2.5 bg-orange-500' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'"
            @click="goToSlide(index)"
            type="button"
            :aria-label="`Отзыв ${index + 1}`"
          ></button>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a
          :href="WHATSAPP_URL_REVIEW"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
        >
          <i class="fab fa-whatsapp"></i>
          <EditableText content-key="reviews_cta" default-value="Оставить отзыв в WhatsApp" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { listReviewsRoute } from '../api/reviews/list'
import EditableText from './EditableText.vue'

interface Review {
  id: string
  name: string
  city: string
  text: string
  rating: number
  date: string
  age?: number
}

const WHATSAPP_URL_REVIEW = 'https://wa.me/79187082023?text=' + encodeURIComponent('Хочу оставить отзыв о работе All World Cars')

const reviews = ref<Review[]>([
  { id: '1', name: 'Алан', age: 34, city: 'Владикавказ', text: 'Заказывал тормозные диски и колодки для Kia Sportage. Нашли всё за 10 минут по VIN. Доставили на следующий день. Цены ниже, чем в местных магазинах. Рекомендую!', rating: 5, date: '15 мая 2025' },
  { id: '2', name: 'Инна', age: 42, city: 'Беслан', text: 'Обращалась уже трижды. Всегда быстро подбирают запчасти, цены адекватные. Особенно нравится кешбэк — уже накопила скидку 10% на следующую покупку.', rating: 5, date: '10 мая 2025' },
  { id: '3', name: 'Заур', age: 38, city: 'Моздок', text: 'Для автосервиса заказываю здесь постоянно. Оптовые цены отличные, доставка в Моздок занимает 1-2 дня. Проблем с качеством никогда не было.', rating: 5, date: '5 мая 2025' },
  { id: '4', name: 'Марина', age: 29, city: 'Ардон', text: 'Подобрали фильтра и масло по госномеру. Не знала точно что нужно — помогли разобраться. Получила заказ уже вечером того же дня в Беслане.', rating: 5, date: '28 апреля 2025' },
  { id: '5', name: 'Тимур', age: 45, city: 'Дигора', text: 'Хороший сервис. Нашли редкую деталь для BMW E60, которую везде искал. Доставили транспортной компанией за 3 дня. Буду обращаться ещё.', rating: 5, date: '20 апреля 2025' },
])

const currentSlide = ref(0)
let autoplayTimer: number | undefined
let isPaused = false

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = window.setInterval(() => {
    if (!isPaused) nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer)
    autoplayTimer = undefined
  }
}

const pauseAutoplay = () => { isPaused = true }
const resumeAutoplay = () => { isPaused = false }

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % reviews.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + reviews.value.length) % reviews.value.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

onMounted(async () => {
  try {
    const serverReviews = await listReviewsRoute.run(ctx)
    if (serverReviews && serverReviews.length > 0) {
      reviews.value = serverReviews.map((r: any) => ({
        id: r.id,
        name: r.name,
        city: r.city,
        text: r.text,
        rating: r.rating,
        date: r.date,
      }))
    }
  } catch {
  }
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>