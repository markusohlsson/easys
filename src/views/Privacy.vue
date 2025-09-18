<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';

</script>

<template>
    <HeroSection :title="'Integritetspolicy'" :description="'Senast uppdaterad: 2025-09-15'" :extraDescription="'På Easys Redovisning värnar vi om din integritet och skyddar dina personuppgifter. Denna policy förklarar vilka uppgifter vi samlar in, varför vi samlar in dem och hur de används.'" />
    <main>
        <section>
            <h2>Uppgifter vi samlar in</h2>
            <p>När du använder vårt kontaktformulär kan vi samla in:</p>
            <ul>
                <li>Ditt namn</li>
                <li>Din e-postadress</li>
                <li>Innehållet i ditt meddelande</li>
            </ul>
            <p>Vi samlar inte in några andra personuppgifter när du besöker vår webbplats.</p>
        </section>
        <section>
            <h2>Hur vi använder dina uppgifter</h2>
            <p>Vi använder uppgifterna för att:</p>
            <ul>
                <li>Svara på din förfrågan</li>
                <li>Kommunicera med dig om våra tjänster</li>
            </ul>
            <p>Vi använder inte dina uppgifter för marknadsföring utan ditt samtycke.</p>
        </section>
        <section>
            <h2>Vem behandlar dina uppgifter</h2>
            <p>Vårt kontaktformulär drivs av <a href="http://formsubmit.co" target="_blank" rel="noopener noreferrer">formsubmit.co</a>. När du skickar formuläret skickas ditt meddelande till vår e-post.
FormSubmit lagrar inte dina uppgifter permanent utan behandlar dem tillfälligt för att vidarebefordra ditt meddelande.</p>
        </section>
        <section>
            <h2>Hur länge vi sparar dina uppgifter</h2>
            <p>Vi sparar endast ditt meddelande så länge det behövs för att hantera din förfrågan. Därefter kan e-postmeddelanden arkiveras i vår inkorg som en del av normal affärskommunikation.</p>
        </section>
        <section>
            <h2>Dina rättigheter enligt GDPR</h2>
            <p>Du har rätt att:</p>
            <ul>
                <li>Begära tillgång till dina personuppgifter</li>
                <li>Begära rättelse eller radering av dina uppgifter</li>
                <li>Invända mot vår behandling av dina uppgifter</li>
            </ul>
            <p>För att utöva dina rättigheter, kontakta oss på: <a href="mailto:info@easys.se">info@easys.se</a></p>
        </section>
        <section>
            <h2>Cookies</h2>
            <p>Denna webbplats använder inga cookies för spårning eller analys.</p>
        </section>
        <section>
            <h2>Kontakta oss</h2>
            <p>Om du har frågor om denna integritetspolicy, kontakta oss på:</p>
            <a href="mailto:info@easys.se">info@easys.se</a>
        </section>
    </main>
</template>

<style scoped>
main {
    max-width:1100px;
    margin: 0 auto;
    padding-top:40px;
    padding-bottom:100px;
}
@media screen and (max-width: 768px) {
    main {
        width: 90%;
    }
}
</style>