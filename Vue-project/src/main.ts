import { createApp } from 'vue'
import './style.css'
import App, {router} from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
