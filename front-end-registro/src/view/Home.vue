<script setup>
  import HomeContainer from '@/components/HomeContainer.vue'
  import NewRegister from '@/components/NewRegister.vue'
</script>

<template>
  <div class="app-container">
    <HomeContainer />
    <NewRegister />
  </div>
</template>

<style>
    .app-container {
    margin: 0 auto;
    display: grid;
    grid-template-areas:  
                          "home-container aside-container"
                          "home-container aside-container"
                          "home-container aside-container";
  }
</style>