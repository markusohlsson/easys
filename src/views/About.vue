<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';

</script>

<template>
  <HeroSection
    :title="`Om Easy's Redovisning`"
    :description="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit facere quidem totam non aliquam rem explicabo mollitia, dicta quod vero reiciendis, nesciunt deleniti provident molestiae aperiam pariatur temporibus tempore accusamus.'"
  />
  <div class="container-wrap">
    <section class="container">
      <div class="container-text">
        <h2>Vår Historia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat repudiandae possimus fuga amet ullam sapiente maxime nesciunt doloribus et laudantium velit ipsam, natus perferendis animi, tenetur, iste error. Animi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloribus aliquid minus doloremque mollitia rem ut, est sapiente eum consequuntur earum magnam nam officia veniam saepe. Tempore amet consectetur excepturi.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempore temporibus inventore excepturi dicta minus perspiciatis molestiae corrupti, veniam repellendus accusamus omnis eligendi ad magni ratione dolor totam nemo aperiam?</p>
      </div>
      <div class="container-image">
        <img
          src="../assets/img/about.png"
          alt=""
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.container-text p {
  margin-bottom: 1.5rem;
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
}

.container-image img {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
    .container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1rem;
  }
  .hero-container {
    padding-top: 2rem;
  }

  .container-text {
    order: 2;
  }
  .container-text p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .container-image img {
    order: 1;
    border-radius: 0.5rem;
    max-height: 300px;
    object-fit: cover;
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