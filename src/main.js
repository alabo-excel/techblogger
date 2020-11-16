import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fb } from './firebase'

let app = '';

fb.auth().onAuthStateChanged(function() {
    if (!app) {
        const app = createApp(App)
        app.use(router)
            .mount('#app')
    }
})