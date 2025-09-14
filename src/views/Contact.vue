<script setup>
import Map from '../components/Map.vue';
import { Phone, Mail, MapPin, Clock } from 'lucide-vue-next';
</script>

<template>
    <section class="container">
    <section class="contact">
    <section class="left">
        <h1>Kontakta oss</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti, delectus architecto ipsa laborum soluta mollitia provident? Delectus doloremque maxime a temporibus inventore dicta porro exercitationem, voluptatibus non quasi eos?</p>

        <form action="">
            <label for="name">Namn</label>
            <input type="text" name="name" id="name" placeholder="Fyll i ditt namn">
            <label for="email">E-post</label>
            <input type="email" name="email" id="email" placeholder="Fyll i din e-postadress">
            <label for="subject">Ämne</label>
            <input type="text" name="subject" id="subject" placeholder="Fyll i ditt ämne">
            <label for="message">Meddelande</label>
            <textarea name="message" id="message" placeholder="Fyll i ditt meddelande"></textarea>
            <button>Skicka</button>
        </form>
    </section>
    <section class="right">
        <ul class="right-contact">
            <li class="contact-details">
                <div class="contact-icon">
                    <Phone/>
                </div>
                <div class="details-info">  
                    <h3 class="details-title">Telefon</h3>
                    <p class="details-text">070-579 90 50</p>
                </div>


            </li>
            <li class="contact-details">
                <div class="contact-icon">
                    <Mail/>
                </div>
                <div class="details-info">
                    <h3 class="details-title">E-post</h3>
                    <p class="details-text"><a href="mailto:info@easys.se">info@easys.se</a></p>
                </div>
            </li>
            <li class="contact-details">
                <div class="contact-icon">
                    <MapPin/>
                </div>
                <div class="details-info">
                    <h3 class="details-title">Adress</h3>
                    <p class="details-text">Valsättravägen 27, 184 94 Åkersberga</p>
                </div>
            </li>
            <li class="contact-details">
                <div class="contact-icon">
                    <Clock/>
                </div>
                <div class="details-info">
                    <h3 class="details-title">Öppettider</h3>
                    <p class="details-text">Mån-Fre 9:00-17:00</p>
                </div>
            </li>
        </ul>
        <section class="map-container">
            <Map />
        </section>
    </section>
    </section>
    </section>
</template>

<style scoped>
.map-container {
    display: flex;
    justify-content: center;
    width: 100%;
}
.container {
    background-color: var(--color-background-dark);
    padding: 150px 20px; /* full-width section padding */
}
.contact {
  background-color: var(--color-background-dark);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px; /* keeps content centered */
  margin: 0 auto;
  gap: 100px;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical centering */
  gap: 20px;
}

.left h1 {
  color: var(--color-text-light);
  font-size: 2.5rem;
  margin: 0;
}

.left p {
  color: var(--color-text);
  line-height: 1.6;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

form label {
  font-weight: 500;
  color: var(--color-text-light);
  font-size: 0.9rem;
}

form input,
form textarea {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 14px 16px;
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
form textarea {
    height:150px;
}

form input:focus,
form textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
  outline: none;
}

::placeholder {
  color: var(--color-text);
  opacity: 0.7;
}

/* Right side stays similar */
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
}

.right-contact {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

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

</style>