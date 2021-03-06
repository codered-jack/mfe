const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig ={
    mode:'production',
    output:{
        filename:   '[name].[contenthash].js', //template on how to name files for caching issues
        publicPath: "/marketing/latest/"
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);