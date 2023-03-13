<template>
  <div id="app">
    <HeaderSection/>
    <homePage/>

  </div>
</template>

<script>
import './styles/global.css'
import HeaderSection from './components/header'
import homePage from './pages/home.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    homePage,
  }
}
</script>

<style>

</style>
