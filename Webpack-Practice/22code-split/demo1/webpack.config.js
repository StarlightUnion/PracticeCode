const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

// process.env.NODE_ENV = "production";

module.exports = {
  entry: {// 多入口 有几个入口输出几个bundle 对应多页面
    main: "./src/js/index.js",
    test: "./src/js/test.js"
  },
  output: {
    filename: "js/[name].[contenthash:10].js",// 输出文件名
    path: resolve(__dirname, "dist"),
    publicPath: "./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,// 移除空格
        removeComments: true// 移除注释
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.[chunkhash:10].css"
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  // 模式
  // mode: "development",
  mode: "production",// 生产环境下会自动压缩js代码
  devServer: {// npx webpack serve
    contentBase: resolve(__dirname, "dist"),
    compress: true,// 压缩
    port: 8000,// 端口
    open: true,// 自动打开浏览器
    hot: true// 热更新
  },
  devtool: "source-map"
}