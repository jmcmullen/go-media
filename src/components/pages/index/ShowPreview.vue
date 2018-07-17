<template>
    <section class="show-preview">
        <div class="show-preview__artwork">
            <img v-lazy="show.artwork" alt="">
        </div>
        <div class="show-preview__info">
            <h2 class="show-preview__title">{{ show.title }}</h2>
            <p class="show-preview__meta">
                <span>{{ show.episodes }} Episodes</span>
                <span>{{ show.rating }}</span>
                <span>{{ show.year }}</span>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        show: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.show-preview {
    display: flex;
    background-color: $color-white;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
    width: 100%;

    @include tablet {
        max-width: 45%;
        margin: 15px;
    }

    &__artwork {
        height: 160px;
        width: 165px;

        img {
            height: 160px;
            width: 165px;
        }
    }

    &__info {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    &__meta {
        display: flex;
        justify-content: space-between;
        max-width: 200px;
    }

    &__title {
        color: $color-primary;
    }
}
</style>
