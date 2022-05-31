import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  }, 
  computed:{
    resultImage(){
      return (this.image ? this.image :  "https://course-vue.javascript.ru/api/images/2");
    },
  },

  template: `
    <div class="meetup-cover" :style="\`--bg-url: url('\${resultImage}')\`">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
