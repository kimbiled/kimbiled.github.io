<template>
  <div>
    <div class="md:max-w-screen-full font-robotoFlex">
      <div class="relative overflow-hidden bg-white px-4">
        <div class="mx-auto max-w-7xl">
          <div
            class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"
          >
            <svg
              class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Header @scrollDown="scrollDown()"></Header>

            <main class="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                  ❅
                  </div>
                  <div class="snowflake">
                    ❋
                  </div>
                  <div class="snowflake">
                  ❅
                  </div>
                  <div class="snowflake">
                  ❆
                  </div>
                  <div class="snowflake">
                  ❅
                  </div>
                  <div class="snowflake">
                    ❈
                  </div>
                  <div class="snowflake">
                    ❅
                  </div>
                  <div class="snowflake">
                    ❅
                  </div>
                  <div class="snowflake">
                    ❇
                  </div>
                  <div class="snowflake">
                    ❋
                  </div>
                  <div class="snowflake">
                    ❅
                  </div>
                  <div class="snowflake">
                    ❆
                  </div>
                </div>
              <div class="sm:text-center lg:text-left">
                <h1
                  class="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl"
                >
                  <span class="text-green-600 xl:inline">UMAI</span>
                  <span class="xl:inline">
                    - Тенгрианская богиня земли и плодородия
                  </span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                >
                  Проект, нацеленный на развитии агропромышленности в
                  Казахстане, основанный на внедрении модульной гидропонной
                  фермы.
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div class="rounded-md shadow">
                    <button
                      class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white hover:bg-green-700 md:py-2 md:px-8 md:text-lg"
                      @click="scrollDown()"
                    >
                      Связаться
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 py-2 lg:py-0">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="../assets/pexels-johannes-plenio-1500523.jpg"
            alt=""
          />
        </div>
      </div>

      <div id="nature-png" class="py-16">
        <div class="container m-auto px-6 md:px-12 xl:px-0">
          <div
            class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3 xl:w-11/12 xl:gap-8"
          >
            <UmaiBasic
              v-for="umaiBasic in umaiBasics"
              :key="umaiBasic.id"
              :umaiBasic="umaiBasic"
            >
            </UmaiBasic>
          </div>
        </div>
      </div>

      <div class="py-16">
        <div class="container m-auto px-6 md:px-12 xl:px-0">
          <h2
            class="text-center text-gray-600 font-robotoFlex font-semibold text-2xl md:text-5xl mb-14"
          >
            Наши преимущества
          </h2>
          <div class="w-full relative">
            <div class="mx-auto overflow-hidden w-11/12 lg:h-400px h-auto">
              <div
                class="flex transition-all lg:w-200p w-600p duration-500 ease-out"
                :style="{
                  'margin-left': '-' + adaptiveSlide * currentSlideIndex + '%',
                }"
              >
                <UmaiAdvantage
                  v-for="umaiAdvantage in umaiAdvantages"
                  :umaiAdvantage="umaiAdvantage"
                  :key="umaiAdvantage.id"
                ></UmaiAdvantage>
              </div>
            </div>
            <button @click="prevSlide" class="prev absolute left-1 inset-y-0">
              <img class="w-5 md:w-8 lg:w-10" src="../assets/prev.svg" alt="" />
            </button>
            <button @click="nextSlide" class="next absolute right-1 inset-y-0">
              <img class="w-5 md:w-8 lg:w-10" src="../assets/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import UmaiBasic from '../components/UmaiBasic.vue';
import UmaiAdvantage from '../components/UmaiAdvantage.vue';
export default {
  data() {
    return {
      ulTexts: [
        '1. Увеличения зелёной экономики;',
        '2. Повышения эффективности использования водных ресурсов на 80%;',
        '3. Поднятия эффективности труда в аграрной отрасли за счет автоматизации процессов;',
        '4. Внедрения технологии модульной гидропонной фермы в сельскохозяйственную отрасль.',
      ],
      umaiBasics: [
        {
          id: 0,
          title: 'Модернизация',
          text: 'Мы разрабатываем и модернизируем новые технологии под нужды рабочего сельского населения. Таким образом, мы хотим автоматизировать все процессы производства сырья и продуктов Агропромышленного комплекса. Наши инженеры следят за качеством, уровнем и актуальностью технологий на прототипе гидропонной фермы.',
          img: 'hydroponics.png',
        },
        {
          id: 1,
          title: 'Тестирование',
          text: 'Исследуя альтернативный вид выращивания растений, мы создали универсальные химические удобрения и методы выращивания. Все исследованные объекты и процессы мы тестируем на прототипе гидропонной фермы. Для отслеживания инноваций в области агрономии у нас ведётся непрерывный трекинг (исследования) интернет-ресурсов.',
          img: 'testing.png',
        },
        {
          id: 2,
          title: 'Переработка и производство',
          text: 'На Гидропонной ферме мы выращиваем зелень и траву, для дальнейшей её переработки и продажи. Чаще всего мы выращиваем микрозелень, специи и пшеничную траву. Из последнего растения созданы уникальные продукты, а именно Пшеничный сок и органическое мыло. В производство был внесён вклад всего коллектива.',
          img: 'soap.png',
        },
      ],
      umaiAdvantages: [
        {
          id: 0,
          title: 'Экономно',
          text: 'Изпользование водных ресурсов на 80% эффективнее',
          img: 'econom.png',
        },
        {
          id: 1,
          title: 'Выгодно',
          text: 'Повышение эффективности труда в аграрной отрасли',
          img: 'profit.png',
        },
        {
          id: 2,
          title: 'Экологично',
          text: 'Увеличение доли зелёной экономики',
          img: 'ecology.png',
        },
        {
          id: 3,
          title: 'Продуктивно',
          text: 'Автоматизация процессов выращивания',
          img: 'productive.png',
        },
        {
          id: 4,
          title: 'Мобильность',
          text: 'Модульная конструкция фермы позволяет свободно перемещаться',
          img: 'mobility.png',
        },
        {
          id: 5,
          title: 'Эффективно',
          text: 'Выращиваемая культура дает результаты за короткое время',
          img: 'effective.png',
        },
      ],
      currentSlideIndex: 0,
      adaptiveSlide: 33.33333,
      slideMax: 4,
    };
  },
  methods: {
    scrollDown() {
      this.$emit('scrollDown');
    },
    prevSlide() {
      const mq = window.matchMedia('(max-width: 1023px)');
      if (mq.matches) {
        this.adaptiveSlide = 100;
        this.slideMax = 6;
      } else {
        this.adaptiveSlide = 33.3333;
        this.slideMax = 4;
      }
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      const mq = window.matchMedia('(max-width: 1023px)');
      if (mq.matches) {
        this.adaptiveSlide = 100;
        this.slideMax = 6;
      } else {
        this.adaptiveSlide = 33.3333;
        this.slideMax = 4;
      }
      if (this.currentSlideIndex > this.slideMax - 2) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
  components: { Header, UmaiBasic, UmaiAdvantage },
  metaInfo: {
    title: 'Главная',
  },
};
</script>
<style lang="css" scoped>
#nature-png {
  background-image: linear-gradient(#00b16a, #c2f970);

  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
