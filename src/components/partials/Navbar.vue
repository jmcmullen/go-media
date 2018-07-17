<template>
    <header class="navbar">
        <div class="navbar__icon navbar__icon--back" @click="goBack">
            <img src="~/assets/images/icons/ic_back.png" alt="">
        </div>

        <div class="navbar__brand">
            <img class="navbar__logo" src="~/assets/images/icons/logo_header.png" alt="">
        </div>

        <div class="navbar__icon navbar__icon--menu" @click="openMenu">
            <img src="~/assets/images/icons/ic_burger.png" alt="">
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        openMenu() {
            this.isMenuOpen = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;

    &__icon {
        max-width: 80px;
        padding: 25px;

        &--back {
            visibility: hidden;
        }
    }

    &__brand {
        max-width: 215px;
    }

    &__logo {
        margin-top: 24px;
    }

    &__menu {
        max-width: 15px;
    }
}
</style>
