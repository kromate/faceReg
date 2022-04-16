import { routes } from '@/router/routes';
import { createRouter, createWebHistory } from 'vue-router';



export const setupRouter = async () => {
	const router = createRouter({
		history: createWebHistory(),
		routes: await Promise.all(routes),
	})

	return router
}

export const router = setupRouter()
