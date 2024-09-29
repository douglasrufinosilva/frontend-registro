<script setup>
  import Card from './Card.vue'
  import { api } from '@/services/api'
import { eventBus } from '@/services/eventBud';
  import { ref, onMounted, computed } from 'vue'

  const data = ref([])
  const currentPage = ref(1)
  const cardsPerPage = ref(9) 

  const fetchData = async () => {
    try {
      
      const response = await api.get("/")
      data.value = response.data

    } catch (error) {
      console.error("Erro ao buscar dados da api.")
    }
  }

  const deleteCard = async (id) => {
    try {
      await api.delete(`/${id}`)
      fetchData()
      
    } catch(error) {
      console.error("Erro ao excluir card.")
    }
  }

  onMounted(() => {
    fetchData()

    eventBus.on('registerCreated', () => {
      fetchData()
    })
  })

  const totalPages = computed(() => {
    return Math.ceil(data.value.length / cardsPerPage.value)
  })

  const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * cardsPerPage.value
    return data.value.slice(start, start + cardsPerPage.value)
  })

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1
    }
  }

  const previousPage = () => {
    if(currentPage.value > 1) {
      currentPage.value -= 1
    }
  }
</script>

<template>
    <div class="card-container">      
      <Card v-for="capivara in paginatedCards" :key="capivara.id" :capivara="capivara" @delete="deleteCard"/>
      <div class="pagination">
        <button @click="previousPage"><</button>
        <button @click="nextPage">></button>
      </div> 
    </div>
</template>

<style scoped>
  .card-container {
    width: 650px;
    min-height: calc(100vh - 200px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;

    padding: 35px 20px;

    position: relative;

    background-color: #F3ECE3;
  }

  .pagination {
    position: absolute;

    display: flex;
    column-gap: 1rem;

    bottom: 20px;
    left: 50%;

    transform: translate(-50%);
  }

  button {
    width: 30px;
    height: 30px;
    margin-top: 30px;
    align-self: center;

    
    border-radius: 50%;
    background-color: #F68C67;

    border: none;
    cursor: pointer;
  }
  
</style>