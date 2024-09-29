<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

</script>

<template>
  <Header />
  <div class="app-container">    
    <main>      
      <router-view />
    </main>
  </div>
  <Footer />
</template>

<style>
  .app-container {
    flex: 1;
  }

  main {
    display: flex;
    justify-content: center;
  }
</style>