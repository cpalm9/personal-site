// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import json from '../api.json'
 
Vue.use(Vuetify)

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: json.apiKey,
  authDomain: json.authDomain,
  databaseURL: json.databaseURL,
  projectId: json.projectId,
  storageBucket: json.storageBucket,
  messagingSenderId: json.messagingSenderId
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
