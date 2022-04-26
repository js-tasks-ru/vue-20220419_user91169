import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const vm = createApp({
    data() {
      return {
        operand1:0,
        operand2:0,  
        operation:"",     
      };
    },
  
    computed: {
        result() {
            switch(this.operation) {
              case "sum":
                return this.operand1 + this.operand2
              case "subtract":
                return this.operand1 - this.operand2
              case "multiply":
                return this.operand1 * this.operand2
              case "divide":
                return (this.operand2!=0) ? this.operand1 / this.operand2: "error"
               default:
                return ""
            }
        }
    },
}).mount('#app');
