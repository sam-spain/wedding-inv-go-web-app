import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Axios.defaults.withCredentials = true;
Axios.defaults.baseURL = "http://localhost:8081";
createApp(App).use(VueAxios, Axios).use(router).mount('#app')
