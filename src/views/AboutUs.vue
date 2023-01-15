<template>
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
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl"
              >
                <span class="block xl:inline">О нас</span>
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
              >
                Нашей миссией является повышение эффективности
                сельскохозяйственной отрасли РК путем внедрения новых
                технологии.
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
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="../assets/umaiTeam2.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative flex items-center bg-green-100">
          <span
            class="hidden lg:absolute lg:inset-y-0 lg:-right-16 lg:block lg:w-16 lg:bg-green-100"
          ></span>

          <div class="p-8 sm:p-16 lg:p-24">
            <h3 class="text-2xl text-green-800 font-bold lg:text-4xl">
              Проект UMAI
            </h3>

            <p class="mt-4 text-green-700 text-sm md:text-base">
              Всем давно известно, что проблема Глобального потепления и
              дефицита воды являются одними из первостепенных в современном
              мире. Климатические изменения истощили источники воды, что привело
              к засухе в странах Азии, Европы и Африки. Это также коснулось
              Агропромышленный комплекс.
            </p>
            <p class="mt-4 text-green-700 text-sm md:text-base">
              Свой вклад в поиск решения проблем АПК и облегчения работы
              сельского хозяйства решили внести и ученики НИШ ФМН г. Нур-Султан
              и других школ. Используя получаемые знания, мы самостоятельно
              разрабатываем гидропонную ферму «Umai».
            </p>
          </div>
        </div>
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="House"
              src="../assets/umaiFarm.jpg"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="items-center lg:h-96 sm:h-auto w-full">
      <h2 class="text-3xl text-center font-bold text-gray-600">
        Путь нашей команды
      </h2>
      <ol class="justify-center md:px-10 mt-10 items-start lg:flex px-0">
        <TimelineItem
          v-for="timelineItem in timelineItems"
          :key="timelineItem.id"
          :timelineItem="timelineItem"
        ></TimelineItem>
      </ol>
    </div>

    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="text-center">
          <div
            class="flex items-center justify-center lg:w-16 lg:h-16 h-14 w-14 mx-auto mb-3 rounded-full bg-green-200 sm:w-12 sm:h-12"
          >
            <img
              src="../assets/icon_members.svg"
              alt="members"
              class="lg:w-10 lg:h-10 md:h-8 h-10 w-10 sm:w-9 sm:h-9"
            />
          </div>
          <h6 class="text-4xl font-bold text-green-500">32</h6>
          <p class="mb-2 font-bold text-md text-gray-700">Участника</p>
          <p class="text-gray-700">
            Нынешний этап развития Umai - это лишь только начало пути, и команда
            намерена двигаться дальше.
          </p>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center mx-auto mb-3 lg:w-16 lg:h-16 h-14 w-14 rounded-full bg-green-200 sm:w-12 sm:h-12"
          >
            <img
              src="../assets/icon_money.svg"
              alt="money"
              class="lg:w-11 lg:h-11 md:h-8 h-10 w-10 sm:w-9 sm:h-9"
            />
          </div>
          <h6 class="text-4xl font-bold text-green-500">2млн</h6>
          <p class="mb-2 font-bold text-md text-gray-700">Инвестиции</p>
          <p class="text-gray-700">
            Сначала проекта были выиграны стартап-конкурсы и получены инвестиции
            в крупных размерах.
          </p>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center lg:w-16 lg:h-16 mx-auto mb-3 rounded-full bg-green-200 sm:w-12 sm:h-12 h-14 w-14"
          >
            <img
              src="../assets/icon_products.svg"
              alt="products"
              class="lg:w-10 lg:h-10 md:h-8 h-9 w-9 sm:w-8 sm:h-8"
            />
          </div>
          <h6 class="text-4xl font-bold text-green-500">2</h6>
          <p class="mb-2 font-bold text-md text-gray-700">Продукта</p>
          <p class="text-gray-700">
            Созданы коммерческие продукты после исследовательских работ и
            экспериментов
          </p>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center lg:w-16 lg:h-16 mx-auto mb-3 rounded-full bg-green-200 sm:w-12 sm:h-12 h-14 w-14"
          >
            <img
              src="../assets/icon_directions.svg"
              alt="directions"
              class="lg:w-12 lg:h-12 md:h-8 h-10 w-10 sm:w-9 sm:h-9"
            />
          </div>
          <h6 class="text-4xl font-bold text-green-500">5</h6>
          <p class="mb-2 font-bold text-md text-gray-700">Подразделений</p>
          <p class="text-gray-700">
            Команда поделена на разные отделы для улучшение эффективности
            выполнение задании.
          </p>
        </div>
      </div>
    </div>

    <div class="container max-w-4xl px-6 py-10 mx-auto">
      <h2
        class="text-2xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white"
      >
        Часто задаваемые вопросы
      </h2>

      <div class="mt-12 space-y-8">
        <FAQ
          v-for="faq in faqs"
          :faq="faq"
          :index="faq.id"
          :key="faq.id"
          :open="faq.open"
          @toggleOpen="toggleOpen"
        ></FAQ>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import TimelineItem from '../components/TimelineItem.vue';
import FAQ from '../components/FAQ.vue';

export default {
  data() {
    return {
      ulTexts: [
        '1. Увеличения зелёной экономики;',
        '2. Повышения эффективности использования водных ресурсов на 80%;',
        '3. Поднятия эффективности труда в аграрной отрасли за счет автоматизации процессов;',
        '4. Внедрения технологии модульной гидропонной фермы в сельскохозяйственную отрасль.',
      ],
      divTexts: [
        'Поэтапно находя решения по всем направлениям работ, команда школьников из 4 участников выросла за счет учеников НИШ и других школ города, вовлекая не только увлеченных биологией, но и химией, информационными технологиями и инженерной механикой.',
        ' Проектом мы занимаемся с октября 2021 г. С этим проектом ученики участвовали в конкурсах “Climate Change 2021” от “Astana Innovations” и “Solve For Tomorrow” от “Samsung”, получив в совокупности гранты на сумму 750 тысяч тенге на продолжение проекта. Проект “Umai” показывает, что полученные в школе знания, применяемые на практике, повышают интерес к учебному процессу.',
      ],
      timelineItems: [
        {
          id: 1,
          title: 'Сентябрь 2021: ',
          text: 'Исследование видов вертикальных ферм, создание чертежа гидропонной фермы.',
        },
        {
          id: 2,
          title: 'Ноябрь 2021:',
          text: 'Моделирование фермы. Сбор прототипа фермы Umai. Создание вариантов модуля автономного управления.',
        },
        {
          id: 3,
          title: 'Январь 2022:',
          text: 'Изучение технологии переработки выращенных культур в готовый продукт с использованием полученных экстрактов.',
        },
        {
          id: 4,
          title: 'Апрель 2022: ',
          text: 'Создание продукта из остаточных органических материалов. Изменение состава удобрения под каждый вид растений.',
        },
        {
          id: 5,
          title: 'Май 2022:',
          text: 'Покупка оборудования для переработки культур в большом объёме. Старт продаж линейки продуктов Umai.',
        },
      ],
      faqs: [
        {
          id: 0,
          question: 'Какое преимущество у нашего продукта?',
          answer:
            ' На гидропонной ферме выращиваются лишь качественные растения. Путем правильной обработки растения, мы получаем 100% натуральный продукт, который  является экологически чистым и не содержит сторонних добавок.  ',
          open: false,
        },
        {
          id: 1,
          question: ' Как я могу заказать ваш товар? ',
          answer:
            "Наши товары вы можете приобрести через Telegram-бота @UmaiBotStore, вы также оставить заявку на данном сайте, в разделе 'Продукты'. Способ доставки будет выбран и согласован в процессе приобретения продукта.",
          open: false,
        },
        {
          id: 2,
          question: "Почему название проекта 'Umai', и с чем это связанно?",
          answer:
            "Umai - тенгрианская богиня земли и плодородия. Всем давно известно, что проблема Глобального потепления и дефицита воды являются одними из первостепенных в современном мире. Это рушит Агропромышленный комплекс Африканских стран и стран Центральной Азии.  Для восстановление агропромышленного сектора и сохранение ресурсов Земли был создан проект 'Umai'.",
          open: false,
        },
        {
          id: 3,
          question: 'Остались вопросы?',
          answer: 'Свяжитесь с нами напрямую через контакты!',
          open: false,
        },
      ],
    };
  },
  methods: {
    scrollDown() {
      this.$emit('scrollDown');
    },
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
  components: { TimelineItem, FAQ, Header },
  metaInfo: {
    title: 'О нас',
  },
};
</script>
<style></style>
