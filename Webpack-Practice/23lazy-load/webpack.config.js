const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

// process.env.NODE_ENV = "production";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "dist"),
    publicPath: "./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.[chunkhash:10].css"
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  // 模式
  // mode: "development",
  mode: "production",
  devServer: {// npx webpack serve
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 8000,
    open: true,
    hot: true
  },
  devtool: "source-map"
}