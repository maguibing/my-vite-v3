import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import  VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
    plugins: [vue(),VueSetupExtend()],
    resolve: {
        alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
})



