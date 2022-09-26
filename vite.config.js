import vue from "@vitejs/plugin-vue"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver, VantResolver} from 'unplugin-vue-components/resolvers';
import {defineConfig} from "vite";

export default defineConfig({
    // 配置默认根路径
    base: "./",
    server: {
        host: "0.0.0.0",
        port: 666
    },
    plugins: [
        // 配置响应式语法糖
        vue({
            reactivityTransform: true
        }),
        // 配置按需引入组件和样式
        AutoImport({
            // 自动导入vue和vue-router插件
            imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
            dts: "src/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(), VantResolver()],
        }),
    ]
})