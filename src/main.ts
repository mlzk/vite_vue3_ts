import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import daisyui from 'daisyui-vue'
const app = createApp(App)

app.use(router)
app.use(daisyui) // 注册
app.use(createPinia())

app.mount('#app')
