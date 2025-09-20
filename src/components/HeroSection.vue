<template>
  <section class="hero-container">
    <div class="text-container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ extraDescription }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    extraDescription: {
        type: String,
        default: '',
    }
})
</script>
<style scoped>
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
    font-size: 3rem;
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
  .hero-container {
    padding-top: 2rem;
  }
  .text-container h1 {
    font-size: 2.5rem;
  }

  .text-container p {
    font-size: 1rem;
    padding-inline: 2rem;
  }
  

}
</style>