<script setup>
import Card from '../components/Card.vue';
import services from '../data/services.json';
import { serviceIcons } from '../data/icons';
import { ref, watch } from 'vue';
import ServiceModal from './ServiceModal.vue';
import { useRouter, useRoute } from 'vue-router';

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

  // navigate to /tjanster/:id
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
<section class="hero-container">
    <div class="text-container">
        <h1>Våra Tjänster</h1>
        <p>Mångårig erfarenhet av redovisning och allt pappersarbete som du behöver hjälp med i ditt företag!</p>
    </div>
</section>
<section class="container">
    <section class="services-grid">
        <Card
            v-for="(service, index) in services"
            :key="service.id"
            :service="service"
            :icon="serviceIcons[service.id]"
            @click="openService(service.id, $event)"
            class="card"
            :class="index % 4 === 0 || index % 4 === 3 ? 'large' : 'small'" 
        />
    </section>
    <ServiceModal v-if="selectedId" :service="selectedService" :visible="showModal" @close="router.push({ name: 'Services' })" :icon="serviceIcons[selectedId]" :startPosition="startPosition" />
</section>
</template>

<style scoped>

.container {
    width: 100%;
}
.services-grid {
    padding:4rem 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5-column base */
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


.hero-container {
    height:60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-dark);
    color: var(--color-text-light)
}
.text-container {
    max-width: 1000px;
    text-align: center;
}

.text-container h1 {
    font-family: var(--font-heading);
    font-size: 3rem; /* slightly larger for emphasis */
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text-light);
}

.text-container p {
    font-family: var(--font-body);
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--color-text);
}

@media screen and (max-width: 768px) {

.text-container h1 {
  font-size: 2.5rem;
}

.text-container p {
  font-size: 1rem;
}
.services-grid {
  display: grid;
  grid-template-columns: 1fr; /* 5-column base */
  gap: 1.5rem;
}

.card.small {
  grid-column: 1;
}

.card.large {
  grid-column: 1;
}
}


</style>