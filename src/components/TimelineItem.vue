<template>
  <div class="lg:w-1/5 md:w-full">
    <li class="relative mb-6 sm:mb-0 group hover:bg-gray-100 md:mb-2 p-5">
      <div class="flex items-center pb-1">
        <div
          class="flex z-10 justify-center items-center w-6 h-6 group-hover:w-10 transition-all ease-out group-hover:h-10 bg-green-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
        >
          <svg
            class="w-3 h-3 group-hover:w-5 group-hover:h-5 transition-all ease-out"
            fill="#1e824c"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
        ></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3
          class="text-lg font-semibold text-gray-700 group-hover:text-2xl dark:text-white transition-all ease-out"
        >
          {{ timelineItem.title }}
        </h3>
        <p
          class="text-sm text-gray-500 group-hover:pt-2 dark:text-gray-400 transition-all ease-out"
        >
          {{ timelineItem.text }}
        </p>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  name: 'TimelineItem',
  props: ['timelineItem'],
};
</script>
<style lang=""></style>
