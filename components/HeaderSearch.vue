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

header{
    width: 100%;
    overflow-x: hidden;
}

.logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 27px auto 20PX;
}

</style>