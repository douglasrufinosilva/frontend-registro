<script>
  export default {
    props: {
      capivara: {
        type: Object,
        required: true,
      },
    },
  }
  
</script>

<template>
  <div class="container">
    <div class="img-container">
      <img :src="capivara.fotoPerfil" alt="">
    </div>

    <div class="info-container">
      <span>{{ capivara.nome }}</span>
      <a href="#">Detalhes</a>
    </div>
  </div>
</template>

<style scoped>
  .container {
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

</style>