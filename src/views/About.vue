<template>
    <section class="hero-container">
        <div class="text-container">
            <h1>Om Easy's Redovisning</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit facere quidem totam non aliquam rem explicabo mollitia, dicta quod vero reiciendis, nesciunt deleniti provident molestiae aperiam pariatur temporibus tempore accusamus.</p>
        </div>
    </section>
    <div class="container-wrap">
        <section class="container">
            <div class="container-text">
                <h2>Vår Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat repudiandae possimus fuga amet ullam sapiente maxime nesciunt doloribus et laudantium velit ipsam, natus perferendis animi, tenetur, iste error. Animi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloribus aliquid minus doloremque mollitia rem ut, est sapiente eum consequuntur earum magnam nam officia veniam saepe. Tempore amet consectetur excepturi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempore temporibus inventore excepturi dicta minus perspiciatis molestiae corrupti, veniam repellendus accusamus omnis eligendi ad magni ratione dolor totam nemo aperiam?</p>
            </div>
            <div class="container-image">
                <img src="../assets/img/about.png" alt="">
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr; /* text 2/3, image 1/3 */
  gap: 2rem; /* spacing between text and image */
  align-items: start; /* align items to the top */
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
  border-radius: 0.75rem; /* optional: slightly rounded corners */
  object-fit: cover;
}

.hero-container {
    height:60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-dark);
    color: var(--color-text-light)
}
.text-container {
    max-width: 1000px;
    text-align: center;
}

.text-container h1 {
    font-family: var(--font-heading);
    font-size: 3rem; /* slightly larger for emphasis */
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text-light);
}

.text-container p {
    font-family: var(--font-body);
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--color-text);
}
</style>