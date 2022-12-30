<template>
  <div
    class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 transform transition-all hover:scale-105 hover:shadow-2xl xl:w-800"
  >
    <div class="pb-12 space-y-4">
      <h3 class="text-xl lg:text-2xl font-medium text-green-700">
        {{ umaiBasic.title }}
      </h3>
      <p
        class="font-robotoFlex text-gray-500 font-light mb-6 text-sm md:text-base"
      >
        {{ umaiBasic.text }}
      </p>
    </div>
    <img
      :src="require('../assets/' + umaiBasic.img)"
      class="mx-auto lg:h-48 lg:w-48 w-36"
      alt="illustration"
      loading="lazy"
      width="900"
      height="600"
    />
  </div>
</template>
<script>
export default {
  name: 'UmaiBasic',
  props: ['umaiBasic'],
};
</script>
<style></style>
