<template>
  <Wrapper>
    <Header />
    <Main />
    <Footer />
  </Wrapper>
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

