<template>
    <div class="home">
        <Index msg="Welcome to vue shop!" />
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
</template>

<script>
import Index from '@/components/Index.vue';

export default {
    name: 'HomeView',
    components: {
        Index,
    },
};
</script>
