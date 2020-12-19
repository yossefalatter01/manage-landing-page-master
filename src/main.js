import Vue from 'vue'
import App from './App.vue'

//==import jquery==//
import 'jquery';
import 'jquery.nicescroll';



//==import bootstrap==//
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//==import fontAwesome ==//
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon);

//==import style file==//
import './css/style.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
