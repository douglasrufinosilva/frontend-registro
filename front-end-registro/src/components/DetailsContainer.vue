<script setup>
  import { api } from '@/services/api'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router';

  const data = ref(null)
  const route = useRoute()
  const isEditing = ref(false)
  const currentYear = ref(new Date().getFullYear())

  const fotoPerfil = ref(null)
  const peso  = ref('')
  const statusSaude = ref('')
  const habitat  = ref('')
  const comportamento  = ref('')
  const dieta  = ref('')
  const observacao  = ref('')
  
  const onFileChange = (e) => {
    fotoPerfil.value = e.target.files[0]
  }

  const fetchData = async () => {
    
    try {
      const id = route.params.id
      
      const response = await api.get(`/detalhes/${id}`)
      data.value = response.data[0]

      peso.value = data.value.peso || ''
      statusSaude.value = data.value.statusSaude || ''
      habitat.value = data.value.habitat || ''
      comportamento.value = data.value.comportamento || ''
      dieta.value = data.value.dieta || ''
      observacao.value = data.value.observacao || ''
      
      console.log(data)
    } catch (error) {
      console.error("Erros ao buscar informações do registro")
    }
  }
  

  const updateRegister = async () => {

    const formData = new FormData()
    
    formData.append('fotoPerfil', fotoPerfil.value)
    formData.append('peso', peso.value)
    formData.append('statusSaude', statusSaude.value)
    formData.append('habitat', habitat.value)
    formData.append('comportamento', comportamento.value)
    formData.append('dieta', dieta.value)
    formData.append('observacao', observacao.value)
    
    try {
      const id = route.params.id
      
      const response = await api.put(`/detalhes/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      isEditing.value = false
      fetchData()

    } catch (error) {
      console.error("Erro ao atualizar registro.")
    }
  }

  onMounted(() => {
    fetchData()
  })

const editRegister = () => {
  isEditing.value = true
}

const cancelEdit = () => {
  isEditing.value = false
}


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
          <div v-if="isEditing" class="file-container">
            <input id="file-img" class="input-img" v-if="isEditing" type="file" @change="onFileChange">
            <label class="add-img-btn" for="file-img">Add foto</label>
          </div>
  
          <div class="info-container">

            <router-link class="back-btn" :to="{ name: 'home' }">Voltar</router-link>
            <button v-if="!isEditing" @click="editRegister" class="edit-btn">Editar</button>
            <button v-if="isEditing" @click="updateRegister" class="edit-btn">Salvar</button>
            <button v-if="isEditing" @click="cancelEdit" class="cancel-btn">Cancelar</button>

            <div v-if="!isEditing" class="data-container">
              <strong>Idade: </strong>
              <div>
                <span v-if="data.idade">{{ currentYear - data.idade }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
            </div>

            <div class="data-container">
              <strong>Peso: </strong>
              <div v-if="!isEditing">
                <span v-if="data.peso">{{ data.peso }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
              <input v-else id="peso" type="number" v-model="peso">
            </div>

            <div class="data-container">
              <strong>Status de Saúde: </strong>
              <div v-if="!isEditing">
                <span v-if="data.statusSaude">{{ data.statusSaude }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
              <input v-else id="statusSaude" type="text" v-model="statusSaude">
            </div>

            <div class="data-container">
              <strong>Habitat: </strong>
              <div v-if="!isEditing">
                <span v-if="data.habitat">{{ data.habitat }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
              <input v-else id="habitat" type="text" v-model="habitat">
            </div>

            <div class="data-container">
              <strong>Comportamento: </strong>
              <div v-if="!isEditing">
                <span v-if="data.comportamento">{{ data.comportamento }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
              <input v-else id="comportamento" type="text" v-model="comportamento">
            </div>

            <div class="data-container">
              <strong>Dieta: </strong>
              <div v-if="!isEditing">
                <span v-if="data.dieta">{{ data.dieta }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
              <input v-else id="dieta" type="text" v-model="dieta">
            </div>

            <div class="data-container">
              <strong>Observação: </strong>
              <div v-if="!isEditing">
                <span v-if="data.observacao">{{ data.observacao }}</span>
                <span v-else >Nenhuma informação registrada</span>
              </div>
              <textarea v-else id="observacao" rows="3" v-model="observacao">
              </textarea>
            </div>

          </div>
        </div>
        <a>Galeria</a>
      </div>
  </div>
</template>

<style scoped>

  .file-container {
    position: absolute;
    top: 48px;
    right: 28px;
  }

  .back-btn {
    width: 50px;
    position: absolute;
    top: 0px;
    left: 20px;

    background-color: #F68C67;
    color: black;
    border-radius: 5px;
    padding: 2px 5px;
    text-decoration: none;
    border: 1px solid black;

    cursor: pointer;
  }

  .add-img-btn {
    width: 70px;
    background-color: #F68C67;
    color: black;
    padding: 5px 10px;  
    cursor: pointer;
    border-radius: 5px;
    font-size: 12px;
  }

  .input-img {
    display: none;
  }

  .edit-btn {
    width: 50px;
    position: absolute;
    top: 275px;
    right: 20px;

    background-color: #F68C67;
    color: black;
    border-radius: 5px;
    padding: 2px 5px;
    text-decoration: none;
    border: 1px solid black;

    cursor: pointer;
  }

  .cancel-btn {
    width: 70px;
    position: absolute;
    top: 275px;
    right: 80px;

    background-color: #F68C67;
    color: black;
    border-radius: 5px;
    padding: 2px 5px;
    text-decoration: none;
    border: 1px solid black;

    cursor: pointer;
  }

  .data-container {
    display: flex;
    flex-direction: column;
  }

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
    display: flex;
    column-gap: 1rem;

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

  input, select {
    height: 25px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    outline: none;
  }

  textarea {
    max-width: 240px;
    padding: 10px;
    outline: none;
  }

</style>