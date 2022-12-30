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
                  <span class="block xl:inline">Наши продукты</span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                >
                  Продукция, полученная с переработанных растений, выращенных на
                  ферме.
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
            src="../assets/soaphero.jpg"
            alt=""
          />
        </div>
      </div>

      
      <div class="flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div
          class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto relative md:text-left"
        >
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img
                  src="../assets/soap_product.png"
                  class="w-full relative z-10"
                  alt=""
                />
                <div
                  class="border-2 rounded-lg border-green-500 absolute top-10 bottom-10 left-10 right-10 z-0"
                ></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h3 class="font-bold text-green-600 uppercase text-4xl mb-5">
                  Органическое ручное мыло из пшеницы
                </h3>
                <p class="text-sm md:text-base text-gray-500">
                  Состав: Вода, глицерин, стеарат натрия, пропиленгликоль,
                  сорбитол, хлорид натрия, стеариновая кислота, лауриновая
                  кислота, диоксид титана, амброксид, ЭДТА. Основная информация:
                  Мыло содержит органические вещества, поэтому этот вариант мыла
                  не подходит аллергикам. Продукт обладает: Прекрасной
                  мылкостью; Приятным запахом; Также мыло не сушит кожу.
                </p>
              </div>
              <div>
                <div class="inline-block align-bottom mr-5">
                  <span
                    class="font-medium text-gray-600 text-3xl leading-none align-baseline"
                    >2000 тг</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-screen min-h-screen flex">
        <div
          class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white"
        >
          <div
            class="sm:w-1/2 xl:w-1/2 h-96 md:h-full flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative"
            style="
              background-image: url(https://images.unsplash.com/photo-1559668772-786155c8cdf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80);
            "
          >
            <div
              class="absolute bg-gradient-to-b from-blue-400 to-green-600 opacity-75 inset-0 z-0"
            ></div>
            <div class="w-full max-w-xl z-10">
              <p class="text-2xl xl:text-4xl font-bold leading-tight mb-6">
                Для того, чтобы осуществить заказ товаров, заполните пустые поля
                формы.
              </p>
              <p class="text-base xl:text-xl text-white font-normal">
                Мы работаем с 9:00-20:00, в будние дни. <br />Через некоторое
                время после заполнения заявки, наши сотрудники свяжутся с вами.
              </p>
            </div>
            <!---remove custom style-->
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div
            class="md:flex md:items-center md:justify-center sm:w-auto md:h-full w-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white"
          >
            <div class="max-w-md w-full">
              <form
                class="mt-8 space-y-6"
                method="POST"
                @submit.prevent="submit"
              >
                <div class="relative">
                  <label
                    class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                    >Имя</label
                  >
                  <input
                    class="w-full text-base px-4 py-4 border border-gray-300 focus:outline-none rounded-2xl focus:border-green-500"
                    v-model="name"
                    type="text"
                    placeholder="Ваше имя"
                  />
                </div>
                <div class="relative">
                  <label
                    class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                    >Email</label
                  >
                  <input
                    class="w-full text-base px-4 py-4 border border-gray-300 focus:outline-none rounded-2xl focus:border-green-500"
                    v-model="emailAddress"
                    type="email"
                    placeholder="Ваша почта"
                  />
                </div>
                <div class="relative">
                  <label
                    class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                    >Номер телефона</label
                  >
                  <input
                    class="w-full text-base px-4 py-4 border border-gray-300 focus:outline-none rounded-2xl focus:border-green-500"
                    v-model="phoneNumber"
                    type="tel"
                    :placeholder="phoneNumber"
                  />
                </div>

                <div class="relative">
                  <label
                    class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                    >Ваш заказ</label
                  >
                  <input
                    class="w-full text-base px-4 py-4 border border-gray-300 focus:outline-none rounded-2xl focus:border-green-500"
                    v-model="order"
                    type="text"
                    placeholder="Ваш заказ"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    @click="submit"
                    class="w-full flex justify-center bg-green-500 hover:bg-green-400 text-white p-4 rounded-full font-semibold shadow-lg cursor-pointer transition duration-300 ease-in-out"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: 'OurProducts',
  data() {
    return {
      emailAddress: '',
      phoneNumber: '+7',
      order: '',
      name: '',
      token: '5276106701:AAGnxbgR_nScAUPmF9Yk1JPuOhtvIhjOsg0',
      chatId: '-676598452',
    };
  },
  methods: {
    scrollDown() {
      this.$emit('scrollDown');
    },
    submit() {
      const fullMessage =
        `Name: ${this.name}` +
        '\n' +
        `E-Mail: ${this.emailAddress}` +
        '\n' +
        `Phone Number: ${this.phoneNumber}` +
        '\n' +
        `Order:${this.order}`;

      console.log(fullMessage);
      this.$http
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`
        )
        .then(
          response => {
            console.log('Success', response);
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        );
    },
  },
  metaInfo: {
    title: 'Наши продукты',
  },
  components: { Header },
};
</script>
<style scoped>
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}
.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}
@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
