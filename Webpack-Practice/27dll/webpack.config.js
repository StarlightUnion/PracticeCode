const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // 告诉webpack哪些库不参与打包，同时需要修改使用的变量名
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, "dist/manifest.json")
    }),
    // 将某个文件打包输出，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, "dist/jquery.js")
    })
  ],
  mode: "development"
}