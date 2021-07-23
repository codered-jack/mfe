const HTMLWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //preset-react for jsx conversion and preset-env for es-2016,17,.. convertion to es2015
            plugins: ["@babel/plugin-transform-runtime"], //enable async await syntax inside browser
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
