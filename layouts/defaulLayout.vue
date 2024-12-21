<template>
  <div>
    <HeaderDefault />
    <slot />
  </div>
</template>

<script>
import HeaderDefault from '../components/HeaderDefault.vue';

export default {
    name: 'defaultLayout',
    components: {
        HeaderDefault
    }
}
</script>

<style>

</style>