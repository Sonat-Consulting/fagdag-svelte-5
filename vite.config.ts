import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
		// Hot Module Replacement
		hmr: {
			overlay: false, // Disable the error overlay
		},
	},
	build: {
		sourcemap: false,
		chunkSizeWarningLimit: 500,
	},
	resolve: {
		preserveSymlinks: false,
	},
})
