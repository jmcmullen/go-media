<template>
    <main>
        <Navbar />
        <nuxt />
        <PoweredBy />
    </main>
</template>

<script>
import Navbar from '~/components/partials/Navbar';
import PoweredBy from '~/components/partials/PoweredBy';

export default {
    components: {
        Navbar,
        PoweredBy,
    },
};
</script>
