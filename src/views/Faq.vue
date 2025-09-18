<script setup>
import { ChevronDown } from 'lucide-vue-next';
import HeroSection from '../components/HeroSection.vue';
import FaqRow from '../components/FaqRow.vue';
import faqs from '../data/faqs.json'
</script>

<template>
    <HeroSection :title="'Frequently Asked Questions'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga esse obcaecati libero explicabo voluptatem error temporibus, facilis voluptas consequuntur placeat in, qui repellendus delectus at iste doloremque. Ex, iure.'" />
    <div class="container-wrap">
      <template v-for="faq in faqs">
        <FaqRow :title="faq.title" :description="faq.description" />
      </template>
    </div>
</template>

<style scoped>
.container-wrap {
    margin: 0 auto;
    max-width: 1100px;
    padding:2rem;
}
</style>