const path = require('path');

module.exports = function override(config,env){
    return {
        ...config,
        output:{
            // filename:"static/js/rigel-widget.js",
            // chunkFilename: "static/js/rigel-widget.[name].js",
            path: path.resolve(__dirname, 'build'),
            // pathinfo : false,
            // // futureEmitAssets:true,
            // publicPath : "/",
            // chunkLoadingGlobal:"webpackJsonpmy-embeddable-widget",
            // globalObject : "this",
        }
    }
}