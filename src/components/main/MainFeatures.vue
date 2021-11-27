<template>
  <div class="flex flex-col w-full md:flex-row lg:flex-row mt-14">
    <div 
      v-for="item,index in features"
      :key="'feature' + index"
      class="flex flex-col items-center mb-12 text-center lg:w-2/6 md:w-2/6"
    >
      <div class="mb-4 bg-gray-circle rounded-full h-24 w-24">
      <img :src="item.image" alt="icon" class="w-14 h-14 mx-auto mt-4 cursor-pointer transform hover:scale-110">
      </div>
      <h2 
        class="my-8 text-base leading-md font-semibold"
      >
        {{ item.title }}
      </h2>
      <p class="text-sm leading-md text-gray-400">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      features:[
        {
          title:'Set a better deadline tasks',
          description:'You can make your duty deadlines better and more orderly',
          image: require('@/assets/features/kalendar.svg')
        },
        {
          title:'Manage the tasks so easily',
          description:'You can manage the deadlines and the schedule becomes easy',
          image: require('@/assets/features/tasks.svg')
        },
        {
          title:'Wouldn’t miss notifications',
          description:'Of course you will always get the tasks and schedule notifications',
          image: require('@/assets/features/notification.svg')
        }
      ]
    }
  }
}

</script>

<style>

</style>