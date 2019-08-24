const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    publicPath: "http://localhost:3000/dist/",
    port: 3000,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ], 
});