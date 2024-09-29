<script setup>
  import Card from './Card.vue'
  import { api } from '@/services/api'
  import { eventBus } from '@/services/eventBud';
  import { ref, onMounted, computed, watch } from 'vue'

  const data = ref([])
  const habitats = ref([])
  const selectedHabitat = ref('')
  const currentPage = ref(1)
  const cardsPerPage = ref(9) 

  const fetchData = async () => {
    try {
      
      const response = await api.get("/")
      data.value = response.data

      const habitatResponse = await api.get("/habitat")
      habitats.value = habitatResponse.data

    } catch (error) {
      console.error("Erro ao buscar dados da api.")
    }
  }

  const deleteCard = async (id) => {
    try {
      await api.delete(`/${id}`)
      await fetchData()
      
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

  const filteredCards = computed( () => {
    if(!selectedHabitat.value) {
      return data.value
    }

    return data.value.filter(item => item.habitat === selectedHabitat.value)
  })

  const totalPages = computed(() => {
    return Math.ceil(filteredCards.value.length / cardsPerPage.value)
  })

  const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * cardsPerPage.value
    return filteredCards.value.slice(start, start + cardsPerPage.value)
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

  watch(selectedHabitat, () => {
    currentPage.value = 1
  })
</script>

<template>
    <div class="card-container" v-if="data.length > 0">      
      <Card v-for="capivara in paginatedCards" :key="capivara.id" :capivara="capivara" @delete="deleteCard"/>
      <div class="pagination">
        <button @click="previousPage"><</button>
        <button @click="nextPage">></button>
      </div> 
      <div class="filter">
        <label for="habitat-filter">Filtrar por habitat:</label>
        <select name="habitat-filter" v-model="selectedHabitat">
          <option value="">Selecione</option>
          <option v-for="habitat in habitats" :key="habitat" :value="habitat">{{ habitat }}</option>
        </select>
      </div>
    </div>
    
    <div class="empty-container" v-else>      
      <div class="no-register">
        <span>Sem registros</span>
        <img src="../assets/image/sem-dados.png" alt="">
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

  .empty-container {
    width: 650px;
    min-height: calc(100vh - 200px);
    display: flex;

    background-color: #F3ECE3;

    justify-content: center;
    align-items: center;
  }

  .pagination {
    position: absolute;

    display: flex;
    column-gap: 1rem;

    bottom: 20px;
    left: 20px;
  }

  .filter {
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    bottom: 20px;
    right: 20px;
  }

  select {
    height: 25px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    outline: none;

    background-color: #F68C67;
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
  
  .no-register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .no-register span {
    font-size: 35px;
    color: red;
  }

  .no-register img {
    width: 100px;
  }
</style>