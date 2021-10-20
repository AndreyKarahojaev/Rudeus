<template lang="pug">
  .wrapper
    Header.header
    Main.main
    Footer.footer
</template>

<script>
// import styles from '../components/style/style.scss'

export default {
  name: 'Wrapper',
  props: {
    msg: String,
    world: String,
    description: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="sass">

</style>