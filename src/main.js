import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBpCncgGD0Un8lz3P6UYZLy_JetjiUFqHw",
  authDomain: "vue-calendar-bca2f.firebaseapp.com",
  databaseURL: "https://vue-calendar-bca2f.firebaseio.com",
  projectId: "vue-calendar-bca2f",
  storageBucket: "vue-calendar-bca2f.appspot.com",
  messagingSenderId: "493090517794",
  appId: "1:493090517794:web:831a218e8cde06d14feb7b",
  measurementId: "G-FVTTDND6DN"
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export const db = firebase.firestore();