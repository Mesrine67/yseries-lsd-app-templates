import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        sourcemap: false
    },
    define: {
        global: 'window'
    },
    optimizeDeps: {
        esbuildOptions: {
            mainFields: ['module', 'main'],
            resolveExtensions: ['.js', '.jsx']
        }
    },
    server: {
        port: 3000,
        open: true
    },
});
