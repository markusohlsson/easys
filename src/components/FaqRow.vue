<template>
  <details>
    <summary>
      <h3>{{ title }}</h3>
      <ChevronDown class="icon" />
    </summary>
    <div class="divider" />
    <p>{{ description }}</p>
  </details>
</template>
<script setup>
import { ChevronDown } from 'lucide-vue-next';
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: ''
    }
})
</script>
<style scoped>
details {
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 1rem;
  background-color: var(--color-background-light);
  color: var(--color-text);
}

summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  color:var(--color-text-light);
}

.divider {
    height: 1px;
    width: 90%;
    margin: 0 auto;
    content: " ";
    background-color: var(--color-border);
}
.icon {
  width: 2rem;
  height: 2rem;
  stroke: var(--color-primary);
  transition: transform 0.3s;
}

details[open] .icon {
  transform: rotate(180deg);
}

details p {
  padding: 1.5rem;
  margin: 0;
  color: var(--color-text);
}
@media screen and (max-width: 768px) {
    details {
        padding: 0.6rem;
        font-size: 0.9rem;
    }
    summary h3 {
        font-size: 0.9rem;
    }
}
</style>