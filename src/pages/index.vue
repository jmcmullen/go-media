<template>
    <section class="page-tv">
        <div class="page-tv__page-title">TV</div>
        <div class="container">
            <div class="page-tv__shows" v-if="!error">
                <ShowPreview v-for="(show, i) in shows" :key="i" :show="show"/>
            </div>
            <h3 class="page-tv__error" v-else>
                {{ error }}
            </h3>
        </div>
    </section>
</template>

<script>
import ShowPreview from '~/components/pages/index/ShowPreview';

export default {
    components: {
        ShowPreview,
    },
    data() {
        return {
            shows: [],
            error: false,
        };
    },
    async asyncData({ app }) {
        try {
            /** @NOTE: Should be an environment variable, but for simplicity I've hard coded it. */
            const API_URL =
                'https://gist.githubusercontent.com/jmcmullen/58295e69bedc7f48e2a2676029151a41/raw/b21a4447109844bfe3518621f64b98e728575cc3/go-media-tv-shows';

            const { data } = await app.$axios.get(API_URL);
            return { shows: data };
        } catch (err) {
            return { error: err.message };
        }
    },
};
</script>

<style lang="scss">
.page-tv {
    background-color: $color-background;
    min-height: 100vh;

    &__page-title {
        padding: 15px;
        color: $color-white;
        background-color: $color-secondary;
        text-align: center;
        font-weight: 600;
    }

    &__shows {
        padding: 15px;
        width: 100%;

        @include tablet {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: row wrap;
            align-content: stretch;
        }
    }
}
</style>
