<template>
  <router-view/>
</template>
<script lang="ts" setup>
import 'vue3-toastify/dist/index.css';
</script>
<style lang="scss">
  @import './global/scss/app.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
