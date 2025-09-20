<script setup>
import Card from '../components/Card.vue';
import services from '../data/services.json';
import { serviceIcons } from '../data/icons';
import { ref, watch } from 'vue';
import ServiceModal from './ServiceModal.vue';
import { useRouter, useRoute } from 'vue-router';
import HeroSection from '../components/HeroSection.vue';

const router = useRouter();
const route = useRoute();

const selectedId = ref(null);
const selectedService = ref(null);
const showModal = ref(false);
const startPosition = ref(null);
function openService(id, event) {
  const selectedCard = event.currentTarget;
  startPosition.value = selectedCard.getBoundingClientRect();

  selectedId.value = id;
  selectedService.value = services.find((service) => service.id === id);
  showModal.value = true;

  router.push({ name: 'SelectedService', params: { id } });
}

watch(
  () => route.params.id,
  (id) => {
    if (id) {
      selectedId.value = id;
      selectedService.value = services.find((service) => service.id === id);
      showModal.value = true;
    } else {
      showModal.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <HeroSection
    :title="'Våra Tjänster'"
    :description="'Mångårig erfarenhet av redovisning och allt pappersarbete som du behöver hjälp med i ditt företag!'"
  />
  <section class="container">
    <section class="services-grid">
      <Card
        v-for="(service, index) in services"
        :key="service.id"
        :service="service"
        :icon="serviceIcons[service.id]"
        class="card"
        :class="index % 4 === 0 || index % 4 === 3 ? 'large' : 'small'"
        @click="openService(service.id, $event)" 
      />
    </section>
    <ServiceModal
      v-if="selectedId"
      :service="selectedService"
      :visible="showModal"
      :icon="serviceIcons[selectedId]"
      :start-position="startPosition"
      @close="router.push({ name: 'Services' })"
    />
  </section>
</template>

<style scoped>

.container {
    width: 100%;
}
.services-grid {
  padding:4rem 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: stretch;
}
.card.small {
  grid-column: span 2;
  grid-row: span 2;
}

.card.large {
  grid-column: span 3;
  grid-row: span 2;
}

@media screen and (max-width: 768px) {

.card.small {
  grid-column: 1;
}

.card.large {
  grid-column: 1;
}
}
</style>