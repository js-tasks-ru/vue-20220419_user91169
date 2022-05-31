import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props:{
    organizer:{
      type: String,
      default:'',
    },
    place:{
      type: String,
      default:'',      
    },
    date:{
      type: Number,
      required:true,
    },
  },

  methods:{
    formatAsLocalDate(timestamp) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(timestamp).toLocaleDateString(navigator.language, options);
    },
    formatAsISoDate(timestamp){
      return new Date(timestamp).toISOString().slice(0, 10);
    }
  },



  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatAsISoDate(date)">{{ formatAsLocalDate(date) }}</time>
      </li>
    </ul>`,
});
