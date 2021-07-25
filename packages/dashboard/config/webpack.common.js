const {VueLoaderPlugin} = require('vue-loader');
module.exports ={
    entry:'./src/index.js',
    output:{
        filename: '[name].[contenthash].js'
    },
    resolve:{
        extentions: ['.js','.vue']
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|git|woff|svg|eot|ttf)$/i,
                use:[
                    {loader:'file-loader'}
                ]
            },
            {
                test:/\.vue$/,
                use: 'vue-loader'
            },
            {
                test:/\.scss|\.css$/,
                use:['vue-style-loader','style-loader','css-loader','sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'], //preset-react for jsx conversion and preset-env for es-2016,17,.. convertion to es2015
                        plugins:['@babel/plugin-transform-runtime'] //enable async await syntax inside browser
                    }
                }
            }
        ]
    },
    plugins:[new VueLoaderPlugin()]
}