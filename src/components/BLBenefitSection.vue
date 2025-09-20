<script setup lang="ts">
import BLBenefitCard from './BLBenefitCard.vue';
import BlBenefits from '../data/BlBenefits.json'
</script>

<template>
  <div class="bl-benefits-grid">
    <BLBenefitCard
      v-for="benefit in BlBenefits"
      :key="benefit.title"
      :title="benefit.title"
      :description="benefit.description"
    />
  </div>
</template>

<style scoped>
.bl-benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
</style>