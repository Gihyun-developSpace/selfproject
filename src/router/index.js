import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home')
	},
	{
		path: '/movie',
		name: 'Movie',
		component: () => import('@/views/Movie')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/About')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
