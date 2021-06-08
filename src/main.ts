import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faSortUp,
  faTimesCircle,
  faCheckSquare,
  faCheckCircle,
  faCalendar,
  faChevronDown,
  faPaperclip,
  faCopy,
  faSearch,
  faSort,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

library.add(
  faSortUp,
  faTimesCircle,
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faSquare,
  faCheckSquare,
  faCircle,
  faCheckCircle,
  faCalendar,
  faChevronDown,
  faPaperclip,
  faCopy,
  faSearch,
  faSort,
  faArrowDown,
  faArrowUp,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
