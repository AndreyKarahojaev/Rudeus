<template>
  <header class="flex justify-between absolute top-7 h-10 w-full z-10">
    <div class="flex justify-between w-full">
      <div class="flex items-center justify-between sm:w-full md:top-8">
        <a href="#" class="flex items-center justify-around">
          <img src="../img/logo.svg" alt="" class="pl-5 pr-1">Remind<span class="text-blue-400">me</span>
        </a>
        <ul class="flex items-center sm:flex-col sm:pr-20 sm:hidden">
          <li class="pl-12 md:p-2">
            <a href="#" class="text-blue-400">Home</a>
          </li>
          <li class="pl-12 md:p-2">
            <a href="#">Features</a>
          </li>
          <li class="md:p-2 pl-12">
            <a href="#">About us</a>
          </li>
        </ul>
        <button class="border-2 border-blue-400 rounded-lg relative right-9 md:hidden lg:hidden">
          <img src="../img/radix-icons_hamburger-menu.svg" alt="" class="p-2 md:hidden lg:hidden">
        </button>
      </div>
      <div class="flex items-center relative right-16 sm:hidden md:right-1">
        <a href="#" class="flex items-center justify-between border-2 rounded-full py-2 px-6 text-blue-400 border-blue-400 md:py-0 md:px-1">About App</a>
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
