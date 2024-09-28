<script setup>
  import Card from './Card.vue'
</script>

<template>
    <div class="card-container">      
      <Card />
    </div>
</template>

<style scoped>
  .card-container {
    width: 650px;
    min-height: calc(100vh - 200px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 35px 20px;

    background-color: #F3ECE3;
  }
  
</style>