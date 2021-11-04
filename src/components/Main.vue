<template>
  <main class="main_step-up pt-36 lg:pt-0">
    <section class="flex flex-col mb-12 md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap relative">
      <div class="flex flex-col items-center md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:justify-between lg:justify-between w-full">
        <div class="flex flex-col items-center justify-between text-center md:max-w-xs lg:max-w-lg">
          <h1 class="mb-16 font-semibold text-lg leading-xl md:mb-1 lg:mb-1">Manage Schedule and Task Easy</h1>
          <p class="text-sm leading-md text-gray-400">Create and organize schedule and task deadline become better, easy manage and certainly no longer lagging behind schedule of activities and task</p>
          <div class="mt-10 ml-8 mr-auto z-10">
            <a href="#" class="text-sm leading-sm justify-between border-2 rounded-full py-6 px-14 text-white border-blue-400 bg-blue-400">Download App</a>
          </div>
        </div>
        <div class="flex mt-10 img-alignment lg:my-0">
          <img src="../img/hero-image.png" alt="" class="hidden md:inline-block lg:inline-block">
          <img src="../img/hero-image-mobile.png" alt="" class="md:hidden lg:hidden mt-10 mb-10 md:my-0 lg:my-0">
        </div>
      </div>
      <div class="flex flex-col w-full md:flex-row lg:flex-row mt-14">
        <div class="flex flex-col items-center mb-12 text-center lg:w-2/6 md:w-2/6">
          <div class="mb-4 bg-gray-circle rounded-full h-24 w-24">
            <img src="../img/kalendar.svg" alt="icon" class="w-14 h-14 mx-auto mt-4">
          </div>
          <h2 class="my-8 text-base leading-md">Set a better deadline tasks</h2>
          <p class="text-sm leading-md text-gray-400">You can make your duty deadlines better and more orderly</p>
        </div>
        <div class="flex flex-col items-center mb-12 text-center lg:w-2/6 md:w-2/6">
          <div class="mb-4 bg-gray-circle rounded-full h-24 w-24">
            <img src="../img/tasks.svg" alt="icon" class="w-14 h-14 mx-auto mt-4">
          </div>
          <h2 class="my-8 text-base leading-md">Manage the tasks so easily</h2>
          <p class="text-sm leading-md text-gray-400">You can manage the deadlines and the schedule becomes easy</p>
        </div>
        <div class="flex flex-col items-center mb-12 text-center lg:w-2/6 md:w-2/6">
          <div class="mb-4 bg-gray-circle rounded-full h-24 w-24">
            <img src="../img/notification.svg" alt="icon" class="w-14 h-14 mx-auto mt-4">
          </div>
          <h2 class="my-8 text-base leading-md">Wouldn’t miss notifications</h2>
          <p class="text-sm leading-md text-gray-400">Of course you will always get the tasks and schedule notifications</p>
        </div>
      </div>
    </section>

    <section class="flex flex-coll w-full flex-wrap mb-12">
      <div class="flex flex-wrap justify-between items-center md:mb-36 lg:mb-36 lg:w-full">
        <div class="img__max-width">
          <img src="../img/img1.jpg" alt="icon" class="w-full mx-auto md:hidden lg:hidden">
          <img src="../img/image-dectop1.jpg" alt="icon" class="hidden md:block lg:block">
        </div>
        <div class="text-center max-w-xs md:max-w-md lg:max-w-md mx-auto">
          <h3 class="text-base leading-slg text-black mt-12 mb-6 md:mb-12 lg:mb-12">Set up task and schedule with a best features</h3>
          <p class="mb-12 text-gray-400 text-sm leading-md">The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now !</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center md:mb-36 lg:mb-36 md:flex-row-reverse lg:flex-row-reverse lg:w-full">
        <div class="img__max-width">
          <img src="../img/img2.jpg" alt="icon" class="w-full mx-auto md:hidden lg:hidden">
          <img src="../img/image-dectop2.jpg" alt="icon" class="hidden md:block lg:block">
        </div>
        <div class="text-center max-w-xs md:max-w-md lg:max-w-md mx-auto">
          <h3 class="text-base leading-slg text-black mt-12 mb-6 md:mb-12 lg:mb-12">Get the highest priority application notification</h3>
          <p class="mb-12 text-gray-400 text-sm leading-md">The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now!</p>
        </div>
      </div>

      <div class="flex mx-auto bg-bg-dowland--mobile lg:bg-bg-dowland max-w-7xl text-center object-cover bg-no-repeat bg-cover bg-center h-auto">
        <div class="flex-wrap flex-col max-w-xl">
          <h3 class="w-full mb-5 lg:mb-20">Download an app now and the various benefits you will get immediately</h3>
          <div class="flex justify-around flex-col md:flex-row">
            <a href="#">Download App</a>
            <a href="#">About App</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <img src="#" alt="">
      <h3>What do they think</h3>
      <div>
        <img src="#" alt="avatar">
        <h3>Samantha Sench</h3>
        <span>Student at University</span>
        <p>“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “</p>
      </div>
      <a href="#"></a>
      <a href="#"></a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 @media (min-width: 770px) { 
  .img-alignment {
    margin-right: 0;
    margin-left: auto;  
    max-width: 500px;
  }
}
 @media (min-width: 700px) and (max-width: 768px) { 
  .img__max-width {
    margin-top: 30px;
  }
}

 @media (min-width: 638px) and (max-width: 1010px) { 
  .main_step-up {
    padding-top: 100px;
  }
}
 @media (min-width: 950px) and (max-width: 1024px) { 
  .img__max-width {
    max-width: 658px;
  }
}

</style>
