<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld 
    msg="Добро пожаловать на" 
    world="Тольятти"
    :description="'Город в Самарской области России, административный центр Ставропольского района, в который не входит, будучи городом областного значения, образует муниципальное образование городской округ Тольятти с единственным населённым пунктом в его составе. Входит в Самарско-Тольяттинскую агломерацию.'"
  />
  <HelloWorld 
    msg="Добро пожаловать на" 
    world="Москва"
    :description="'Столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области, в состав которой не входит. Крупнейший по численности населения город России и её субъект - 12655050 человек, самый населённый из городов, полностью расположенных в Европе, входит в десятку городов мира по численности населения, крупнейший русскоязычный город в мире. Центр Московской городской агломерации.'"
  />
  <Test />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
}
</script>


<style>
/* img {
    display: block;
  margin: 0 auto;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

