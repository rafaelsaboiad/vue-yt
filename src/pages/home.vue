<template>
<main id="container">
  <div id="posConfig">
    <img id="gitLogo" src="@/assets/gitLogo.png" alt="GitHub Logo">
      <div id="btnConfig">
        <button id="btnRepo">Repositório</button>
        <button id="btnUser">Usuário</button>
      </div>
      <div id="searchConfig">
        <input id="inputSearch" type="text" placeholder="Buscar...">
      </div>
  </div>
</main>
</template>

<script>
export default {
  name:'homePage'
}
</script>

<style scoped>
  #gitLogo {
    width: 169px;
    height: 169px;
  }

  #posConfig {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    margin-top: 50px;
  }

  #btnRepo{
    width: 186px;
    height: 51px;
    background: white;
    border-radius: 5px;
    border: 2px solid #000000;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #btnUser{
    width: 186px;
    height: 51px;
    background: white;
    border-radius: 5px;
    border: 2px solid #000000;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #btnConfig {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 430px;
    margin-top: 40px;
  }

  #searchConfig {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
  }

  #inputSearch {
    display: flex; 
    width: 780px;
    height: 71px;
    padding-left: 20px;
    padding-right: 55px; 
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    background-image: url("../assets/search.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 725px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}
</style>