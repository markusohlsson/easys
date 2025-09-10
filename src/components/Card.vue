<template>
  <div class="service-card">
    <div class="icon">
      <component :is="icon" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: () => null
  }
});
</script>

<style scoped>
.service-card {
  background-color: var(--color-surface); /* white card */
  color: var(--color-text); /* dark text */
  border-radius: 1rem; /* slightly more rounded */
  padding: 2rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--color-border); /* subtle border for premium look */
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 8%);
}

.service-card .icon {
  font-size: 3rem;
  color: var(--color-primary); /* deep green accent */
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-family: var(--font-heading);
  font-size: 1.625rem;
  margin-bottom: 0.75rem;
  color: var(--color-primary); /* make heading green for emphasis */
}

.service-card p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text); /* ensure readable dark text */
}
</style>