const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig ={
    mode:'production',
    output:{
        filename:   '[name].[contenthash].js', //template on how to name files for caching issues
        publicPath: "/auth/latest/"
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            filename:'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);