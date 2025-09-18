<template>
    <ul class="right-contact">
        <ContactDetailsCard
            v-for="detail in mappedDetails"
            :key="detail.title"
            :contact-detail="detail"
        />
    </ul>
</template>

<script setup>
import contactdetails from '../data/contactdetails.json'
import ContactDetailsCard from './ContactDetailsCard.vue';
import { Phone, Mail, MapPin, Clock } from "lucide-vue-next"
const iconMap = { Phone, Mail, MapPin, Clock }
const mappedDetails = contactdetails.map(detail => ({
  ...detail,
  icon: iconMap[detail.icon],
}))
</script>

<style scoped>
.right-contact {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media screen and (max-width: 768px) {
  .right-contact {
    width: 100%;
  }
}
</style>