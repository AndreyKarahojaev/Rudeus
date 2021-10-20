<template>
<div class="remindme">
  <img src="#" alt="icon">
  <h4>Remindme</h4>
  <p>Task deadlines and scheduling applications with various benefits and advantages</p>
</div>
<div class="profit">
  <div class="sitemaps">
    <h4>Sitemaps</h4>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">About Us</a></li>
    </ul>
  </div>
  <div class="advantages">
    <h4>Sitemaps</h4>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">About Us</a></li>
    </ul>
  </div>
</div>
<div class="social-network">
  <h4>Follow Us</h4>
  <ul>
    <li><a href="#"><img src="#" alt="social"></a></li>
    <li><a href="#"><img src="#" alt="social"></a></li>
    <li><a href="#"><img src="#" alt="social"></a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Footer',
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
