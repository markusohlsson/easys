<template>
        <div class="benefit">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true,
        default: '',
    },
    description: {
        type: String,
        required: true,
        default: '',
    }
})
</script>

<style scoped>
.benefit {
  background-color: var(--color-background-dark);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
  text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.benefit:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 8%);
}

.benefit h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.benefit p {
  line-height: 1.6;
}
</style>