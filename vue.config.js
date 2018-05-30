const API_SERVER = "https://easy-mock.com/mock/5a52dab373320b64d504b8b0/crm";

module.exports = {
    //类似之前的assetsPublicPath
    baseUrl: '/',
    //服务设置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: API_SERVER,
                changeOrigin: true,
                // cookieDomainRewrite: "172.16.0.211"//开发
                pathRewrite:  {"^/api" : ""}
            }
        },
        before(app){
            //其他中间件执行前
            // console.log(app)
        }
    },
    // webpack
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map'
            // mutate config for production...
        }
    }
}



console.log(`This platform is ${process.platform}`);