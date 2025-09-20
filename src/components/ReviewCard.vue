<template>
  <div class="review-card">
    <Quote class="review-icon" />
    <p class="review-description">
      "{{ review.description }}"
    </p>
    <div class="author">
      <h5 class="review-author">
        {{ review.author }}
      </h5>
      <p class="review-company">
        {{ review.company }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { Quote } from 'lucide-vue-next';
import { defineProps } from 'vue';
defineProps({
    review: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
.author {
    text-align: center;
}
.review-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
    background-color: var(--color-background-dark);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}
.review-icon {
    color: var(--color-primary);
    height: 30px;
    width: 30px;
}
.review-description {
    color: var(--color-text-light);
    padding: 10px;
}
.review-author {
    margin: 0;
    font-size: 1.1rem;
}
.review-company {
    margin: 0;
    font-style: italic;
}
.review-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgb(0 0 0 / 8%);
}
</style>