const {merge} = require('webpack-merge');  //merge two diff webpack config
const HTMLWebpackPlugin = require('html-webpack-plugin'); //takes html and injects diff script with diff names into it
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode:'development',
    output:{
        publicPath:'http://localhost:8082/'
    },
    devServer:{
        port:8082,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            filename:'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies,
        }),
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);
