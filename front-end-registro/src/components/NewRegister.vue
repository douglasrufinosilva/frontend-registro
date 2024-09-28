<script>
</script>

<template>
  <div class="aside-container">    
    <div class="filter">
      <label for="habitat-filter">Filtrar por habitat</label>
      <select name="habitat-filter" id="">
        <option value="">Selecione</option>
      </select>
    </div>

    <div class="separator">      
    </div>

    <h3>Novo registro</h3>
    
    <div class="container">
      <div class="input-container">
        <label for="name">Nome:</label>     
        <input id="name" type="text" placeholder="Nome">
      </div>
      <div class="input-container">
        <label for="name">Idade (Ano de nascimento):</label>     
        <input id="name" type="text" placeholder="Informe o ano de nascimento">
      </div>
      <div class="input-container">
        <label for="name">Peso:</label>     
        <input id="name" type="text" placeholder="Peso">
      </div>
      <div class="input-container">
        <label for="name">Status de Saúde:</label>     
        <input id="name" type="text" placeholder="Status de Saúde">
      </div>
      <div class="input-container">
        <label for="name">Habitat:</label>     
        <input id="name" type="text" placeholder="Habitat">
      </div>
      <div class="input-container">
        <label for="name">Comportamento:</label>     
        <input id="name" type="text" placeholder="Comportamento">
      </div>
      <div class="input-container">
        <label for="name">Dieta:</label>     
        <input id="name" type="text" placeholder="Dieta">
      </div>
      <div class="input-container">
        <label for="name">Observações:</label>     
        <textarea placeholder="Mais detalhes sobre a capivara" rows="6"/>
      </div>
    </div>

    <button>Registrar</button>
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
</style>