<template>
  <div class="wrapper max-w-screen-xl mx-auto relative">
    <slot />
  </div>
</template>

<script>
// import styles from '../components/style/style.scss'

export default {
  name: 'Wrapper'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.wrapper {
  max-width: 1440px;
  width: 100%;
  min-width: 320px;
  font-family: Poppins, sans-serif;
}

.logo-text {
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
}

</style>