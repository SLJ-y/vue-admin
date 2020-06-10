module.exports = {
    // 基本路径, vue.cli 3.3以前请使用 baseUrl
    publicPath: '/',
    // 输出文件路径
    // outputDir: '',
    // 用于嵌套生成的静态资产 (js, css, img, fonts) 的目录
    // assetsDir: '',
    // 生产环境 sourceMap
    productionSourceMap: true,
    // webpack 配置
    configureWebpack: ()=> {},
    chainWebpack: ()=>{},
    // css 相关配置
    css: {
        // 启用 css modules
        requireModuleExtension: true,
        // 是否使用 css 分离插件
        extract: true,
        // 开启 css source maps
        sourceMap: false,
        // css 预设器配置项
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    },
    // webpack-dev-server 相关配置
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8080,
    //     proxy: {} // 设置代理
    // },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}