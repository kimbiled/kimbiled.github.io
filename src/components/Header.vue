<template>
  <div class="bg-white">
    <nav
      class="container py-4 mx-auto md:flex md:items-center md:justify-center lg:justify-start"
    >
      <div class="flex items-center justify-between md:hidden">
        <div class="py-3 sm:max-w-xl">
          <div x-data="{ open: false }">
            <button
              class="text-gray-500 w-10 h-10 relative focus:outline-none"
              @click="showMenu = !showMenu"
            >
              <div
                class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{
                    'rotate-45': showMenu,
                    ' -translate-y-1.5': !showMenu,
                  }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'opacity-0': showMenu }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{
                    '-rotate-45': showMenu,
                    ' translate-y-1.5': !showMenu,
                  }"
                ></span>
              </div>
            </button>
          </div>
        </div>
        <router-link to="/" class="flex md:hidden"
          ><img src="../assets/logo.png" class="h-10" alt="logo" />
        </router-link>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex ' : 'hidden '"
        class="flex-col px-2 md:px-0 space-y-4 border-b-2 pb-4 md:flex md:space-x-10 lg:space-x-5 md:flex-row md:items-center md:mt-0 md:border-b-0"
      >
        <router-link to="/" class="md:flex hidden"
          ><img src="../assets/logo.png" class="h-12" alt="logo" />
        </router-link>
        <router-link
          to="/"
          class="font-medium text-sm text-gray-500 hover:text-salem"
          >ГЛАВНАЯ</router-link
        >

        <router-link
          to="/ourproducts"
          class="font-medium text-sm text-gray-500 hover:text-salem"
          >ПРОДУКТЫ</router-link
        >

        <router-link
          to="/aboutus"
          class="font-medium text-sm text-gray-500 hover:text-salem"
          >О НАС</router-link
        >
        <span
          id="contacts"
          @click="scrollDown"
          class="text-sm font-medium cursor-pointer text-gray-800 hover:text-salem"
          ><span @click="showMenu = !showMenu">КОНТАКТЫ</span>
        </span>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    scrollDown() {
      this.$emit('scrollDown');
    },
  },
};
</script>
<style lang="css"></style>
