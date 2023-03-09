<template>
<header>
  <div id="locateText">
    <span id="iniText" @click="handleClick">INÍCIO</span>
    <span id="favText" @click="handleClick">FAVORITOS</span>
  </div>
</header>
</template>

<script>
export default {
    name:'HeaderSection'
}
</script>

<style scoped>
  header {
    display: flex;
    background-color: var(--color-background-nav);
    height: 84px;
    width: 100%;

    align-items: center;
    justify-content: flex-end;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    }

  #locateText {
    display: flex;
    height: 84px;
    width: 391px;
    justify-content: center;
    align-items: center;
    
  }

  #iniText {
    margin-right: 30px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

</style>



