import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg2zn8En3flcpNo1dS9m9noIkt-TB5kgQ",
  authDomain: "user-login-108d9.firebaseapp.com",
  projectId: "user-login-108d9",
  storageBucket: "user-login-108d9.appspot.com",
  messagingSenderId: "231703260276",
  appId: "1:231703260276:web:03fa160c16c98dcfc4b521",
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
