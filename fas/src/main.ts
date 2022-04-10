import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {router as setupRouter} from './router'
import './assets/main.css'

const init = async () => {
	const app = createApp(App)
	const router = await setupRouter
	app.use(router)
	await router.isReady()
	app.mount('#app')
}

init().then()