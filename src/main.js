import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'
Axios.defaults.withCredentials = true;
let baseURL;
if (process.env.NODE_ENV === "production") {
    baseURL = "https://api.gospainwedding.com";
} else {
    baseURL = "http://localhost:8081";
}

if (typeof baseURL !== "undefined") {
    Axios.defaults.baseURL = baseURL;
  }
createApp(App).use(VueAxios, Axios).use(router).mount('#app')
