import { defineConfig } from 'vite';
import { resolve } from 'path';
import { transformRequireDynamic } from './src/plugins';
import vue from '@vitejs/plugin-vue';

function pathResolve(dir) {
    return resolve(__dirname, '.', dir);
}

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        transformRequireDynamic()
    ], // 配置需要使用的插件列表，将vue添加进去
    resolve: { // 配置文件别名
        alias: {
            '@': pathResolve('src')
        }
    },
    // 强制预构建插件包
    optimizeDeps: {
        include: ['axios']
    },
    // 打包配置
    build: {
        target: 'modules',
        outDir: 'dist', // 输出路径
        assetsDir: 'assets', // 指定生成静态资源的存放路径
        minify: 'terser', // 混淆器， terser构建后文件体积更小
    },
    // 本地运行配置
    server: {
        cors: true, // 默认启用并允许任何源
        open: true, // 在服务器启动时，自动在浏览器打开应用程序
        port: 6255,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',   //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
