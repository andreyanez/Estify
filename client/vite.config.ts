import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/api': 'http://localhost:8080',
		},
	},
	plugins: [react(), Icons()],
});
