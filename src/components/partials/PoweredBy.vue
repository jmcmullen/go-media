<template>
    <footer class="powered-by">
        <div class="scroll-top" @click="scrollTop">
            <img class="scroll-top__image" src="~/assets/images/icons/ic_back_top.png" alt="">
            <h4 class="scroll-top__title">Back to top</h4>
        </div>
        <div class="powered-by__brand">
            <p class="powered-by__text">Powered by</p>
            <img class="powered-by__logo" src="~/assets/images/icons/logo_footer.png" alt="">
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        scrollTop() {
            if (process.browser) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.powered-by {
    background-color: $color-background;
    text-align: center;

    &__text {
        color: darken($color-background, 20%);
        font-size: 0.8rem;
        margin: 5px 2px 2px;

        @include tablet {
            margin-top: 0;
        }
    }

    &__logo {
        margin: 5px;
        max-width: 170px;
    }
}

.scroll-top {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid darken($color-background, 10%);

    @include tablet {
        display: none;
    }

    &__image {
        align-self: center;
        width: 50px;
        margin-bottom: 5px;
    }

    &__title {
        font-size: 1.4rem;
        font-weight: 400;
        color: $color-dark-text;
    }
}
</style>
