// vue.config.js
// 用于做相应的合并处理
const merge = require('webpack-merge');
const configs = require('./config');

// 根据环境判断使用哪份配置
const cfg = process.env.NODE_ENV === 'production' ? configs.build.env : configs.dev.env;

module.exports = {
    // 本地启动出口地址 在vue-cli.3.3版本后 baseUrl被废除了,用publicPath
    publicPath: './',
    // 编译打包输出路径
    outputDir: 'outDist',
    // 该配置项用于设置是否为生产环境构建生成 source map
    productionSourceMap: true,

    // config 参数为已经解析好的 webpack 配置
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options =>
                merge(options, {
                    limit: 5120,
                })
            ),
            config.plugin('define')
                .tap(args => {
                    let name = 'process.env';

                    // 使用 merge 保证原始值不变
                    args[0][name] = merge(args[0][name], cfg);

                    return args
                })
    },

    devServer: {
        open: false, // 是否自动打开浏览器页面
        // host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务
        proxy: null, // string | Object 代理设置

        // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
        before: app => {
            // `app` 是一个 express 实例
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                // path.resolve(__dirname, './src/assets/css/themes.less')
            ]
        }
    }
}
