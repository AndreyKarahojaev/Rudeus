<template lang="pug">
    header.header
    .content
      ul.header-list
        li.header-item
          a(scr="").header-item__link
        li.header-item
          a(scr="").header-item__link
        li.header-item
          a(scr="").header-item__link
        li.header-item
          a(scr="").header-item__link
        button.header-button
        a(scr="").header-link__btn.btn-link
</template>


<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    world: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-content: center;
}

h1 {
  text-align: center;
}
p {
  margin: 0 auto;
}

</style>
