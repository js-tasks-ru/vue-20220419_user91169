import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    cover: {
      type: String,
    },
  },  

  template: `
    <div class="meetup-cover" :style="cover && \`--bg-url: url('\${cover}')\`">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
