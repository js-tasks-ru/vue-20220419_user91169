 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const vm = createApp({
  data() {
    return {
      meetup: null,
      checkedMeetUpId:0,       
    };
  },
  watch:{
    checkedMeetUpId: {
      deep: true,
      immediate: true,
      handler() {
          this.fetchMeetupById(this.checkedMeetUpId).then((meetup)=> this.meetup = meetup);
      },
    },

  }, 
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    }
  },
    
}).mount('#app');