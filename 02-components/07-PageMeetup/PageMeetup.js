import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import  MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      error: '',
    };
  },

  watch: {
    meetupId(value) {
      this.loadMeetup(this.meetupId);
    },
  },

  mounted() {
    this.loadMeetup(this.meetupId);
  },
  
    methods: {
      loadMeetup(meetupId) {
        this.isLoading = true;
        this.error = '';
        fetchMeetupById(meetupId)
          .then((meetup) => { this.meetup = meetup;})
          .catch((err) => { this.error = err.message; this.meetup= null})
          .finally(() => { 
            this.isLoading = false;
          });
      },
    },
 

  template: `
    <div class="page-meetup">
     <meetup-view v-if="meetup && !isLoading" :meetup="meetup" />

      <ui-container v-if="isLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error && !isLoading">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
