import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'


export default defineConfig({
    root: './demo',
    build: {
        outDir: './dist',
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'PrimeBased',
            formats: ['es', 'umd'],
            fileName: (format) => `${'prime-based'}.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        },
    },
    plugins: [
        vue(),
    ],

})
