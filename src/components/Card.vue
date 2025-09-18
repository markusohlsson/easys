<template>
  <div class="service-card">
    <div class="title-wrapper">
      <div class="icon">
        <component :is="icon" />
      </div>
      <h3>{{ service.title }}</h3>
    </div>
    <p>{{ service.shortDesc }}</p>
      <span class="card-link">Läs mer...</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  service: {
    type: Object,
    required: true,
  },
  icon: {
    type: [Object, Function],
    default: () => null
  }
});
</script>

<style scoped>
.card-link {
  color: var(--color-primary);
}
.card-link:hover {
  text-decoration: underline;
  cursor: pointer;
}
.service-card {
  background-color: var(--color-background-dark);
  color: var(--color-text);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
  text-align: left; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  cursor: pointer;
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 8%);
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1rem;
}

.service-card .icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  background-color: var(--color-icon-bg);
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card h3 {
  font-family: var(--font-heading);
  font-size: 1.625rem;
  margin: 0;

}

.service-card p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
}

@media screen and (max-width: 768px) {
  .service-card {
    padding: 1rem;
  }
  .service-card h3 {
    font-size: 1.4rem;
  }
}
</style>