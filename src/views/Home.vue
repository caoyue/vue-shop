<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <Index msg="Welcome to vue shop!" />
    </div>
</template>

<script>
import Index from '@/components/Index.vue';

export default {
    name: 'Home',
    components: {
        Index,
    },
};
</script>
