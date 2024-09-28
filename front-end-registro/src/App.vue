<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import HomeContainer from './components/HomeContainer.vue';
  import NewRegister from './components/NewRegister.vue';
</script>

<template>
  <Header />
  <div class="app-container">    
    <main>      
      <HomeContainer />
      <NewRegister />
    </main>
  </div>
  <Footer />
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

  main {
    display: flex;
    justify-content: center;
  }
</style>