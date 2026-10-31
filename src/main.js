import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/css/tailwind.css'
import './assets/css/rtl.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$formatPrice = (price) => new Intl.NumberFormat('fa-IR', { style: 'currency', currency: 'IRR' }).format(price)
app.mount('#app')
