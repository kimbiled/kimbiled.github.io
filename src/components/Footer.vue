<template>
  <div>
    <footer>
      <h2
        class="text-center text-gray-600 mt-2 md:mt-20 font-robotoFlex font-semibold text-2xl md:text-5xl mb-14"
      >
        Наши контакты:
      </h2>
      <section
        class="text-gray-600 bg-white body-font relative font-robotoFlex"
      >
        <div class="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.827089304525!2d71.39846655540177!3d51.08619141388345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a6cc006355%3A0x8f90912bc3efb511!2sNazarbayev%20Intellektual&#39;naya%20Shkola%20Fiziko-Matematicheskogo%20Napravleniya%20G.%20Nur-Sultan!5e0!3m2!1sen!2skz!4v1650548462186!5m2!1sen!2skz"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div
              class="bg-white relative flex flex-wrap py-6 rounded shadow-md"
            >
              <div class="lg:w-1/2 px-6">
                <h2
                  class="title-font font-semibold text-gray-900 tracking-widest text-xs"
                >
                  ADDRESS
                </h2>
                <p class="mt-1 text-sm">
                  Хусейн бен Талал 21, <br />
                  г.Нур-Султан
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2
                  class="title-font font-semibold text-gray-900 tracking-widest text-xs"
                >
                  EMAIL
                </h2>
                <a
                  class="text-green-600 leading-relaxed text-sm"
                  href="mailto:webmaster@example.com"
                  >umai_qazaqstan@gmail.com</a
                >

                <h2
                  class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
                >
                  PHONE
                </h2>
                <a
                  href="tel:+7702258786"
                  class="text-green-600 text-sm leading-relaxed"
                >
                  +77057423304
                </a>
              </div>
            </div>
          </div>
          <form
            method="POST"
            @submit.prevent="submit"
            class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 class="text-gray-700 text-lg mb-1 font-medium title-font">
              Оставьте отзыв
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Чтобы написать отзыв о нашей работе, заполните форму ниже
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Имя</label
              >
              <input
                v-model="name"
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                v-model="emailAddress"
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Отзыв</label
              >
              <textarea
                v-model="message"
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              class="w-full flex justify-center bg-green-500 hover:bg-green-400 text-white p-4 rounded-lg font-semibold shadow-lg cursor-pointer transition duration-300 ease-in-out"
            >
              Отправить
            </button>
          </form>
        </div>
      </section>
      <div class="text-gray-600 body-font">
        <div
          class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img src="../assets/umainy.png" class="h-20 w-20" alt="logo" />
          </a>
          <p
            class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
          >
            © 2021 Umai —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >All Rights Reserved.</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a
              class="text-gray-500"
              href="https://www.facebook.com/Umai-264656952093747/"
            >
              <img
                class="w-7 h-7"
                src="../assets/facebook.png"
                alt="facebook"
              />
            </a>

            <a
              class="ml-3 text-gray-500"
              href="https://www.instagram.com/umai_qazaqstan/?utm_medium=copy_link"
            >
              <img
                class="w-7 h-7"
                src="../assets/instagram.png"
                alt="instagram"
              />
            </a>
            <a class="ml-3 text-gray-500" href="https://t.me/UmaiStoreBot">
              <img
                class="w-7 h-7"
                src="../assets/telegram.png"
                alt="telegram"
              />
            </a>
            <a class="ml-3 text-gray-500" href="https://wa.me/77057423304">
              <img
                class="w-7 h-7"
                src="../assets/whatsapp.png"
                alt="whatsapp"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      emailAddress: '',
      name: '',
      message: '',
      token: '5276106701:AAGnxbgR_nScAUPmF9Yk1JPuOhtvIhjOsg0',
      chatId: '-676598452',
    };
  },
  methods: {
    submit() {
      const fullMessage =
        'FEEDBACK:' +
        '\n' +
        `Name: ${this.name}` +
        '\n' +
        `E-Mail: ${this.emailAddress}` +
        '\n' +
        `Message:${this.message}`;

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
};
</script>
<style lang="css"></style>
