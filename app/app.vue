<script setup lang="ts">
import CardsSrvCorp from './components/cards.vue';
import CommentsSrvCorp from './components/comments.vue';
import LandingSrvCorp from './components/landing.vue';
import NavbarSrvCorp from './components/navbar.vue';
import FooterSrvCorp from './components/footer.vue';
</script>

<template>
    <UPage>
        <Wspbutton />
        <NavbarSrvCorp />
        <LandingSrvCorp id="inicio" />
        <CardsSrvCorp id="servicios" />
        <CommentsSrvCorp id="testimonios" />
<FooterSrvCorp id="contacto" />
    </UPage>
</template>