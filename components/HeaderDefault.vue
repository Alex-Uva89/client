<template>
  <header>
    <ButtonBack @click="$router.go(-1)">
        <img src="~/assets/icons/back.svg" alt="icona del tasto indietro">
    </ButtonBack>
    <h1> {{ title }} </h1>
  </header>
</template>

<script>
import ButtonBack from "./ButtonBackComponent.vue";

export default {
    name: 'HeaderDefault',
    components: {
        ButtonBack
    },
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    header {
        height: 64px;
        background-color: var(--primary);
        color: white;
        padding: 10px;
        text-align: center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-size: var(--font-size-xlarge);
        font-family: var(--font-primary);
        font-weight: var(--font-weight-primary)
    }
</style>