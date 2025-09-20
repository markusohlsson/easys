<script setup>
import ReviewCard from './ReviewCard.vue';
import reviews from '../data/reviews.json';
import { ref, onMounted } from 'vue';

const selectedReviews = ref([]);

function getRandomReviews(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

onMounted(() => {
  selectedReviews.value = getRandomReviews(reviews, 3);
});
</script>

<template>
  <section class="review-text-section">
    <h2>Vad våra kunder säger</h2>
    <p>Vi är stolta över att ha förtjänat förtroendet från företag av alla storlekar</p>
  </section>
  <section class="review-section">
    <ReviewCard 
      v-for="review in selectedReviews" 
      :key="review.author + review.company" 
      :review="review"
    />
  </section>
</template>

<style scoped>
.review-text-section {
    text-align: center;
    padding: 2rem;
}
.review-section {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding-bottom: 2rem;
}
@media screen and (max-width:768px) {
  .review-section {
    padding: 2rem;
    grid-template-columns: 1fr; 
  }
}
</style>
