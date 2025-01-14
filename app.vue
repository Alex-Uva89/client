<template>
  <div class="app">
    <Start />
    <router-view></router-view>
    
    <Navigation />
  </div>
</template>

<script>
import defaultLayout from './layouts/homeLayout.vue';
import Start from './components/StartComponent.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Start,
    defaultLayout,
    Navigation
  }
}
</script>

<style>
  .app {
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }
</style>
