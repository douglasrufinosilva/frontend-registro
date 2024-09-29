<script setup>
import DetailsContainer from '@/components/DetailsContainer.vue';

</script>

<template>
      <div class="card-container">      
        <DetailsContainer />
    </div>
</template>

<style scoped>
  .empty-container {
    width: 650px;
    min-height: calc(100vh - 200px);
    display: flex;

    background-color: #F3ECE3;

    justify-content: center;
    align-items: center;
  }
</style>