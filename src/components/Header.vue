<template>
  <header class="absolute top-7 w-full">
    <div class="flex justify-between">
      <div class="flex items-center ">
        <a href="#" class="flex items-center justify-between">
          <img src="../img/logo.svg" alt="" class="pl-5 pr-1">Remind<span class="text-blue-400">me</span>
        </a>
        <ul class="flex items-center">
          <li class="pl-12">
            <a href="#" class="text-blue-400">Home</a>
          </li>
          <li class="pl-12">
            <a href="#">Features</a>
          </li>
          <li class="pl-12">
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <a href="#" class="flex items-center justify-between border-2 rounded-full py-2 px-6 text-blue-400 ">About App</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
