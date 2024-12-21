<template>
    <header>
        <div class="logo-container">
            <Logo />
        </div>

        <SearcBar />

        <PillowCategories />
    </header>
</template>

<script>
import Logo from './LogoSection.vue';
import SearcBar from './SearchComponent.vue';
import PillowCategories from './PillowCategoryComponent.vue';

export default {
    name: 'HeaderSearch',
    components: {
        Logo,
        SearcBar,
        PillowCategories
    }
}

</script>

<style scoped>

.logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 27px auto 20PX;
}

</style>