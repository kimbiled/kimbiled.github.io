<template>
  <div id="app" class="overflow-hidden">
    <router-view @scrollDown="scrollToTheBlock('footer')"></router-view>
    <div ref="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>

<script>
import Footer from './components/Footer.vue';
export default {
  data() {
    return {};
  },
  components: { Footer },
  mounted() {
    // this.$refs.child will hold an instance of <Child />
  },
  methods: {
    scrollToTheBlock(refName) {
      var element = this.$refs[refName];
      var down = element.offsetTop;

      window.scrollTo({ top: down, behavior: 'smooth' });
    },
  },
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          'Всем давно известно, что проблема Глобального потепления и дефицита воды являются одними из первостепенных в современном мире. Климатические изменения истощили источники воды, что привело к засухе в странах Азии, Европы и Африки. Это также коснулось Агропромышленный комплекс.',
      },
      {
        name: 'keywords',
        content:
          'Гидропоника, гидропонная ферма, загрязнение, глобально потепление, пшеничный сок, мыло, НИШ, НИШ ФМН, ученики, umai, умай',
      },
    ],
  },
};
</script>
