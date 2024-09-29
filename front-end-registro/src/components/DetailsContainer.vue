<script setup>
  import { api } from '@/services/api'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router';

  const data = ref(null)
  const route = useRoute()

  const fetchData = async () => {
    
    try {
      const id = route.params.id

      const response = await api.get(`/detalhes/${id}`)
      data.value = response.data[0]

      console.log(data)
    } catch (error) {
      console.error("Erros ao buscar informações do registro")
    }
  }

  onMounted(() => {
    fetchData()
  }) 
</script>

<template>
  <div class="details" v-if="data">      
    <h3>Informações de {{ data.nome }}</h3>

      <div class="container">
        <div class="infos">
          <div class="img-container">
            <img v-if="data.fotoPerfil" :src="data.fotoPerfil" alt="">
            <img v-else src="../assets/image/no-image.jpg" alt="">
          </div>
  
          <div class="info-container">
            <span>
              <strong>Idade: </strong>
              <span v-if="data.idade">{{ data.idade }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
            <span>
              <strong>Peso: </strong>
              <span v-if="data.peso">{{ data.peso }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
            <span>
              <strong>Status de Saúde: </strong>
              <span v-if="data.statusSaude">{{ data.statusSaude }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
            <span>
              <strong>Habitat: </strong>
              <span v-if="data.habitat">{{ data.habitat }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
            <span>
              <strong>Comportamento: </strong>
              <span v-if="data.comportamento">{{ data.comportamento }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
            <span>
              <strong>Dieta: </strong>
              <span v-if="data.dieta">{{ data.dieta }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
            <span>
              <strong>Observação: </strong>
              <span v-if="data.observacao">{{ data.observacao }}</span>
              <span v-else >Nenhuma informação registrada</span>
            </span>
          </div>
        </div>
        <a>Galeria</a>
      </div>
  </div>
</template>

<style scoped>
  .details {
    width: 650px;
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;

    background-color: #F3ECE3;

    justify-content: center;
    align-items: center;
  }

  h3 {
    margin-bottom: 10px;
  }

  .container {
    position: relative;
    width: 540px;
    height: 630px;

    background-color: #DCC7AC;
    border-radius: 10px;
    padding: 1rem 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .img-container {
    width: 300px;
    height: 200px;
    overflow: hidden;
    align-self: center;

    border-radius: 10px;
    margin-top: 20px;
  }

  .img-container img {
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }

  .infos {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: start;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-self: start;
    row-gap: .5rem;

    max-height: 290px;
    overflow-y: scroll;
    scrollbar-width: none;

    margin-top: 2.5rem;
  }

  .info-container strong  {
    font-size: 15px;
  }

  .info-container span {
    font-size: 13px;
  } 

  a {
    background-color: #F68C67;
    color: black;
    border-radius: 5px;
    padding: 5px 10px;
    text-decoration: none;
    font-size: 15px;

    margin-top: 15px;
  }

</style>