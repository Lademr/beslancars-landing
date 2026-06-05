<template>
  <div>
    <Header />
    <HeroSection />
    <SelectionOptions />
    <AdvantagesSection />
    <PriceList />
    <AppPromo />
    <ReviewsSection />
    <SeoContent />
    <FooterBanner />
    <RequestModal />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import SelectionOptions from '../components/SelectionOptions.vue'
import AdvantagesSection from '../components/AdvantagesSection.vue'
import PriceList from '../components/PriceList.vue'
import AppPromo from '../components/AppPromo.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import SeoContent from '../components/SeoContent.vue'
import FooterBanner from '../components/FooterBanner.vue'
import RequestModal from '../components/RequestModal.vue'

defineProps<{
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}>()
</script>