const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",// 输出文件名
    path: resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  // 模式
  mode: "development",

  // * devServer配置 只会在内存中进行打包，不会有输出
  /* 启动：
   *  webpack-cli 3.x => npx webpack-dev-server
   *  webpack-cli 4.x => npx webpack serve
  */

  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,// 压缩
    port: 8000,// 端口
    open: true// 自动打开浏览器
  }
}