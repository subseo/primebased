import {createApp} from 'vue'
import App from './App.vue'
import '../lib/index.css'
import {PrimeBased} from "../lib/main";


const app = createApp(App);
app.use(PrimeBased);

app.mount('#app')
