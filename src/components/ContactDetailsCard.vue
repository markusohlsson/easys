<template>
  <li class="contact-details">
    <div class="contact-icon">
      <component :is="contactDetail.icon" />
    </div>
    <div class="details-info">  
      <h3 class="details-title">
        {{ contactDetail.title }}
      </h3>
      <p
        v-if="contactDetail.link"
        class="details-text"
      >
        <a :href="contactDetail.link">{{ contactDetail.text }}</a>
      </p>
      <p
        v-else
        class="details-text"
      >
        {{ contactDetail.text }}
      </p>
    </div>
  </li>
</template>
<script setup>
defineProps({
    contactDetail: {
        type: Object,
        default: ()=>{},
    }
})
</script>

<style scoped>
.contact-details {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-icon {
  color: var(--color-primary);
  font-size: 1.5rem;
}

.details-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.details-title {
  font-weight: 600;
  color: var(--color-text-light);
  margin: 0;
}

.details-text {
  margin: 0;
  color: var(--color-text);
}
.details-text a {
    text-decoration: none;
}

@media screen and (max-width: 768px) {
  .contact-details {
    display: grid;
    grid-template-columns: 40px 1fr; 
    align-items: start;
    width: 100%;
    gap: 16px;
  }

  .contact-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .contact-details {
    justify-content: center;
  }
}
</style>