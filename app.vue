<template>
  <div>
    <router-view></router-view>
    
    <navigation />
  </div>
</template>

<script>
import defaultLayout from './layouts/homeLayout.vue';
import navigation from './components/Navigation.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    defaultLayout,
    Navigation
  }
}
</script>
