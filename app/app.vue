<script setup lang="ts">
import CardsSrvCorp from './components/cards.vue';
import CommentsSrvCorp from './components/comments.vue';
import LandingSrvCorp from './components/landing.vue';
import NavbarSrvCorp from './components/navbar.vue';
import FooterSrvCorp from './components/footer.vue';
import ContactusSrvCorp from './components/contactus.vue';
</script>

<template>
    <UPage>
        <WspbuttonSrvCorp />
        <NavbarSrvCorp />
        <LandingSrvCorp id="servicios" />
        <CardsSrvCorp />
        <CommentsSrvCorp />
        <ContactusSrvCorp id="testimonios" />
        <FooterSrvCorp id="contacto" />
    </UPage>
</template>