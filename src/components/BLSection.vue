<script setup lang="ts">
import BLBenefitSection from './BLBenefitSection.vue';
import BLCardLarge from './BLCardLarge.vue';

</script>

<template>
  <section class="bl-trusted">
    <div class="container">
      <BLCardLarge />
      <BLBenefitSection />
      <div class="bl-cta">
        <a
          class="cta-button"
          href="https://www.bjornlunden.se/hitta-din-redovisningsbyr%c3%a5/bjorn-lunden-certifierad-redovisningsbyr__4117"
          target="_blank"
          rel="noopener noreferrer"
        >
          Läs mer hos Björn Lunden
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bl-trusted {
  color: var(--color-text);
  padding: 4rem 2rem;
  font-family: var(--font-body);
}

.bl-trusted .container {
  max-width: 1100px;
  margin: 0 auto;
}

.bl-cta {
  text-align: center;
}

@media screen and (max-width: 768px) {
}
</style>