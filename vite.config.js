import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// import unocss from 'unocss/vite'
// import {presetAttributify, presetIcons, presetUno} from 'unocss'
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
    plugins: [
        vue({
            reactivityTransform: true
        }),
        VueSetupExtend(),
        // unocss({
        //     presets:[
        //         presetAttributify(),
        //         presetIcons(),
        //         presetUno()
        //     ]
        // }),
        AutoImport({
            imports: ["vue", "vue-router"],
            dts: "src/auto-import.d.ts"
        })
    ],
    resolve: {
        alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
})



