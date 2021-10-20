<template>
  <Wrapper 
    msg="Добро пожаловать на" 
    world="Тольятти"
    :description="'Текст текст текс'"
  />
    <Header 
    msg="Добро пожаловать на" 
    world="Тольятти"
    :description="'Текст текст текс'"
  />
    <Main 
    msg="Добро пожаловать на" 
    world="Тольятти"
    :description="'Текст текст текс'"
  />
    <Footer 
    msg="Добро пожаловать на" 
    world="Тольятти"
    :description="'Текст текст текс'"
  />

</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Wrapper,
    Header,
    Main,
    Footer
  }
}
</script>


<style>

</style>

