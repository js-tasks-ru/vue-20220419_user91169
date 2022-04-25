 import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
    data() {
      return {
        count: 0
      }
    }
  }).mount('#app');

