<template>
  <div class="hello">
    <h1> {{ msg }} <span class="sity">{{ world.toUpperCase() }}</span></h1>
    <p>
      {{ description }} 
    </p><span> Ура</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

.sity {
  color: red;
}
</style>
