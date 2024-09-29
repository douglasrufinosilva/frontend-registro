<script>
  export default {
    props: {
      capivara: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleDelete() {
        this.$emit('delete', this.capivara.id)
      }
    }
  }
  
</script>

<template>
  <div class="container">
    <button class="delete" @click="handleDelete">X</button>
    <div class="img-container">
      <img :src="capivara.fotoPerfil" alt="">
    </div>

    <div class="info-container">
      <span>{{ capivara.nome }}</span>
      <router-link :to="{ name: 'details', params: { id: capivara.id } }">Detalhes</router-link>
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
    width: 150px;
    height: 180px;

    background-color: #DCC7AC;
    border-radius: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .img-container {
    width: 120px;
    height: auto;
    overflow: hidden;
  }

  .img-container img {
    width: 100%;
    border-radius: 5px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info-container span {
    font-size: 20px;

  }

  .info-container a {
    background-color: #F68C67;
    color: black;
    border-radius: 5px;
    padding: 5px 10px;
    text-decoration: none;
    font-size: 15px;

    margin-top: 15px;
  }

  .delete {
    position: absolute;
    top: -10px;
    right: -10px;

    width: 30px;
    height: 30px;
    align-self: center;

    
    border-radius: 50%;
    background-color: #F68C67;

    border: none;
    cursor: pointer;
  }

</style>