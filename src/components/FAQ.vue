<template lang="">
    <div>
        <div @click="$emit('toggleOpen', index)"  class="flex-1 mt-8 lg:mx-12 lg:mt-0 cursor-pointer	">
            <div  class="flex items-center focus:outline-none">
                <h1 class="mx-4 font-medium text-base md:text-xl text-gray-700 dark:text-white">{{ faq.question }}</h1>
                <img :class="
                    open
                    ? 'float-right ml-auto  transition right-0 delay-100 duration-100 ease-in-out '
                    : 'float-right ml-auto transform -rotate-90  right-0 transition delay-75 duration-75 ease-in-out '
                " src="../assets/green-down.svg" alt="" />
            </div>

            <div :class="open ? 'flex mt-8 md:mx-10 ml-5  delay-100 duration-100 ease-in-out' :' hidden w-0 h-0' ">
                
                <span class="border border-green-500"></span>
                <p  class="max-w-3xl  text-xs md:text-base  px-4 text-gray-500 dark:text-gray-300">
             {{ faq.answer }}</p>
            </div>
        </div>
        
        <hr class="my-8 border-gray-200 dark:border-gray-700">
    </div>
</template>
<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "open", "toggleOpen"]
};
</script>
<style lang="">
    
</style>