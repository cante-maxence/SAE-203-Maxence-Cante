import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrfyEmfWnzEEnQQZuRe5ZS9sFDHVYxoKo",
    authDomain: "sae-203-74962.firebaseapp.com",
    projectId: "sae-203-74962",
    storageBucket: "sae-203-74962.appspot.com",
    messagingSenderId: "654295469862",
    appId: "1:654295469862:web:0a16fc321f1e8fa0003be7"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
