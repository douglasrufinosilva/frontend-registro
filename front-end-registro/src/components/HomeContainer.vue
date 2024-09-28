<script setup>
  import Card from './Card.vue'
  import { api } from '@/services/api'
  import { ref, onMounted } from 'vue'

const capivaras = ref([])

const fetchData = async () => {
  try {
    
    const response = await api.get("/")
    capivaras.value = response.data

    console.log(capivaras)
  } catch (error) {
    console.error("Erro ao buscar dados da api.")
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
    <div class="card-container">      
      <Card v-for="capivara in capivaras" :key="capivara.id" :capivara="capivara"/>
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