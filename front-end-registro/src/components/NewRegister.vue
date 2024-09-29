<script setup>
  import { ref } from 'vue';
  import { api } from '@/services/api'
  import { eventBus } from '@/services/eventBud';
  
  const fotoPerfil = ref(null)
  const nome = ref('')
  const idade = ref('')
  const peso  = ref('')
  const statusSaude = ref('')
  const habitat  = ref('')
  const comportamento  = ref('')
  const dieta  = ref('')
  const observacao  = ref('')

  const onFileChange = (e) => {
    fotoPerfil.value = e.target.files[0]
  }

  const register = async () => {

    const formData = new FormData()

    formData.append('fotoPerfil', fotoPerfil.value)
    formData.append('nome', nome.value)
    formData.append('idade', idade.value)
    formData.append('peso', peso.value)
    formData.append('statusSaude', statusSaude.value)
    formData.append('habitat', habitat.value)
    formData.append('comportamento', comportamento.value)
    formData.append('dieta', dieta.value)
    formData.append('observacao', observacao.value)

    try {
      const response = await api.post("/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      eventBus.emit('registerCreated', true)

      nome.value = ''
      idade.value = ''
      peso.value = ''
      statusSaude.value = ''
      habitat.value = ''
      comportamento.value = ''
      dieta.value = ''
      observacao.value = ''
      fotoPerfil.value = ''

    } catch (error) {
      console.error("Erro ao registrar capivara.")
    }
  }


</script>

<template>
  <div class="aside-container">    
    <div class="filter">
      <label for="habitat-filter">Filtrar por habitat:</label>
      <select name="habitat-filter" id="">
        <option value="">Selecione</option>
      </select>
    </div>

    <div class="separator">      
    </div>

    <h3>Novo registro</h3>
    
    <div class="container">
      <div class="input-container">
        <label for="name">Foto de Perfil:</label>     
        <input id="fotoPerfil" type="file" @change="onFileChange">
      </div>
      <div class="input-container">
        <label for="name">Nome:</label>     
        <input id="nome" type="text" placeholder="Nome" v-model="nome">
      </div>
      <div class="input-container">
        <label for="name">Ano de nascimento:</label>     
        <input id="idade" type="number" placeholder="Informe o ano de nascimento" v-model="idade">
      </div>
      <div class="input-container">
        <label for="name">Peso:</label>     
        <input id="peso" type="number" placeholder="Peso" v-model="peso">
      </div>
      <div class="input-container">
        <label for="name">Status de Saúde:</label>     
        <input id="statusSaude" type="text" placeholder="Status de Saúde" v-model="statusSaude">
      </div>
      <div class="input-container">
        <label for="name">Habitat:</label>     
        <input id="habitat" type="text" placeholder="Habitat" v-model="habitat">
      </div>
      <div class="input-container">
        <label for="name">Comportamento:</label>     
        <input id="comportamento" type="text" placeholder="Comportamento" v-model="comportamento">
      </div>
      <div class="input-container">
        <label for="name">Dieta:</label>     
        <input id="dieta" type="text" placeholder="Dieta" v-model="dieta">
      </div>
      <div class="input-container">
        <label for="name">Observações:</label>     
        <textarea id="observacao" placeholder="Mais detalhes sobre a capivara" rows="6" v-model="observacao">
        </textarea>
      </div>
    </div>

    <button @click="register">Registrar</button>
  </div>
</template>

<style scoped>

  .filter {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  .aside-container {
    display: flex;
    flex-direction: column;
    grid-area: aside-container;
    width: 280px;

    background-color: #DCC7AC;
    padding: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    row-gap: .7rem;
  }

  .separator {
    border-top: 1px solid black;
    margin: 20px 0;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  textarea {
    max-width: 240px;
    padding: 10px;
    outline: none;
  }

  label {
    font-size: 14px;
  }

  select {
    cursor: pointer;
  }

  input, select {
    height: 25px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    outline: none;
  }

  button {
    width: 80px;
    margin-top: 30px;
    align-self: center;
    padding: 8px 12px;
    
    border-radius: 5px;
    background-color: #F68C67;

    border: none;
    cursor: pointer;
  }

  #fotoPerfil {
    padding: 0;
    margin-top: 5px;
  }
</style>