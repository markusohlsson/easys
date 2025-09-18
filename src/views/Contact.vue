<script setup>
import ContactDetailsSection from '../components/ContactDetailsSection.vue';
import ContactForm from '../components/ContactForm.vue';
import Map from '../components/Map.vue';
import { Phone, Mail, MapPin, Clock } from 'lucide-vue-next';
</script>

<template>
    <section class="container">
    <section class="contact">
    <section class="left">
        <h1>Kontakta oss</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti, delectus architecto ipsa laborum soluta mollitia provident? Delectus doloremque maxime a temporibus inventore dicta porro exercitationem, voluptatibus non quasi eos?</p>
      <ContactForm />

    </section>
    <section class="right">
        <ContactDetailsSection />
        <Map />
    </section>
    </section>
    </section>
</template>

<style scoped>
.container {
    background-color: var(--color-background-dark);
    padding: 150px 20px;
}
.contact {
  background-color: var(--color-background-dark);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  gap: 100px;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.left h1 {
  font-size: 2.5rem;
  margin: 0;
}

.left p {
  line-height: 1.6;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
}


@media screen and (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .left h1 {
    font-size: 2rem;
    text-align: center;
  }

  .left p {
    text-align: center;
    font-size: 1rem;
  }

  form {
    width: 100%;
  }
  .map-container {
    margin-top: 2rem;
  }
}

</style>