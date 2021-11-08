<template>
<footer class="flex flex-wrap justify-around md:pr-10 text-center pb-14">
  <div class="flex flex-col sm:pb-6 text-center relative special-transfer">
    <a href="#" class="flex items-center sm:pb-4 md:pb-12 pb-58 logo-text text-base leading-sm lg:leading-md lg:text-md block-indent xl:relative xl:left-24 transform duration-500 hover:scale-95">
      <img src="../img/logo-footer.svg" alt="" class="logo-img ml-5 mr-1 xl:absolute xl:-left-32">Remind<span class="text-blue-400">me</span>
    </a>
    <p class="max-w-sm text-left md:max-w-xs footer__block-indent--text sm:pl-5 text-sm leading-md text-gray-400">Task deadlines and scheduling applications with various benefits and advantages</p>
  </div>

  <div class="flex-col list-disc sm:pb-6 footer__block-indent special-transfer">
    <h4 class="text-left sm:pb-4 md:pb-12 block-indent leading-md text-base font-semibold">Sitemaps</h4>
    <ul class="pl-5">
      <li class="list-disc py-1.5 text-sm leading-md text-gray-400 link-hover-solid"><a href="#">Home</a></li>
      <li class="list-disc py-1.5 text-sm leading-md text-gray-400 link-hover-solid"><a href="#">Features</a></li>
      <li class="list-disc py-1.5 text-sm leading-md text-gray-400 link-hover-solid"><a href="#">About Us</a></li>
    </ul>
  </div>

  <div class="flex-col sm:pb-6 footer__block-indent special-transfer">
    <h4 class="text-left sm:pb-4 md:pb-12 block-indent leading-md text-base font-semibold">Advantages</h4>
    <ul class="pl-5">
      <li class="list-disc py-1.5 text-sm leading-md text-gray-400 link-hover-solid"><a href="#">Set Task Better</a></li>
      <li class="list-disc py-1.5 text-sm leading-md text-gray-400 link-hover-solid"><a href="#">Easy Manage</a></li>
      <li class="list-disc py-1.5 text-sm leading-md text-gray-400 link-hover-solid"><a href="#">Get Notification</a></li>
    </ul>
  </div>

  <div class="flex-col sm:justify-start sm:pr-10 special-transfer">
    <h4 class="text-left sm:pb-4 md:pb-12 block-indent leading-md text-base font-semibold">Follow Us</h4>
    <div class="flex flex-row items-center justify-around">
      <a href="#" class="pr-9 transform hover:scale-x-110"><img src="../img/facebook.svg" alt="social"></a>
      <a href="#" class="pr-9 transform hover:scale-x-110"><img src="../img/twitter.svg" alt="social"></a>
      <a href="#" class="pr-9 transform hover:scale-x-110"><img src="../img/linkedin.svg" alt="social"></a>
    </div>
  </div>
</footer>

</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

.footer__block-indent--text 
  width: 300px

@media (min-width: 440px)
  .block-indent 
    padding-bottom: 58px
    width: 100%

.logo-img
  width: 55px
  height: 55px

@media (min-width: 1024px)
  .logo-img
    width: 100px
    height: 100px

@media (min-width: 455px) and (max-width: 550px)
  .special-transfer
    margin-right: 20px

@media (min-width: 505px) and (max-width: 650px)
  .special-transfer
    margin-bottom: 20px


@media (min-width: 585px) and (max-width: 635px)
  .special-transfer
    margin-right: 20px

.list-disc::marker 
  color: #2170FF

.link-hover-solid a:after 
    background-color: #212121
    display: block
    content: ""
    height: 1px
    width: 0%
    transition: width .2s ease-in-out

.link-hover-solid a:hover:after,
.link-hover-solid a:focus:after 
    width: 100%
    
</style>
