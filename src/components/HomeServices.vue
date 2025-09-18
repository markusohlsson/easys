<script setup>
import { ClipboardListIcon, BookOpenIcon, UserCheckIcon, FileTextIcon } from 'lucide-vue-next';
import Card from '../components/Card.vue';
import services from '../data/services.json';
import { serviceIcons } from '../data/icons';
import { useRouter } from 'vue-router';
import ServiceModal from '../views/ServiceModal.vue';
import { ref } from 'vue';

const router = useRouter();
const featuredServices = services.slice(0, 4);

const selectedId = ref(null);
const selectedService = ref(null);
const showExpandedService = ref(false);
const startPosition = ref(null);
function expandService(id, event) {
  const selectedCard = event.currentTarget;
  startPosition.value = selectedCard.getBoundingClientRect();

  selectedId.value = id;
  selectedService.value = services.find((service) => service.id === id);
  showExpandedService.value = true;
}

</script>
<template>
    <section class="services">
    <div class="container">
        <div class="intro-text">
            <h2>Tjänster</h2>
            <p>Allt pappersarbete som du behöver hjälp med i ditt företag</p>
        </div>
      <div class="services-grid">
        <template v-for="(service, index) in featuredServices">
            <Card 
                :service="service"
                :icon="serviceIcons[service.id]"
                :class="(index === 0 || index === 3) ? 'card-large' : 'card-small'"
                @click="expandService(service.id, $event)"
                />
        </template>
        <ServiceModal v-if="selectedId" :service="selectedService" :visible="showExpandedService" :icon="serviceIcons[selectedId]" @close="selectedId = null" :startPosition="startPosition"/>
      </div>
      <div class="services-cta">
        <router-link
          to="/tjanster"
          class="cta-button"
        >
          Se alla tjänster
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 4rem 2rem;
  font-family: var(--font-body);
}
.intro-text {
    text-align: center;
}
.intro-text h2 {
    margin: 0 !important;
}

.services .container {
  max-width: 1100px;
  margin: 0 auto;
}

.services h2 {
  text-align: center;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card-large:nth-child(1) { grid-column: 1 / span 2; }
.card-small:nth-child(2) { grid-column: 3 / 4; }
.card-small:nth-child(3) { grid-column: 1 / 2; }
.card-large:nth-child(4) { grid-column: 2 / span 2; }

.services-cta {
  margin-top: 3rem;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .card-large:nth-child(1) { grid-column: 1;}
  .card-small:nth-child(2) { grid-column: 1;}
  .card-small:nth-child(3) { grid-column: 1;}
  .card-large:nth-child(4) { grid-column: 1;}
}
</style>