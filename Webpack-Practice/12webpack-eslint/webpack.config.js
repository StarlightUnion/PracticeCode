const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",// 输出文件名
    path: resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        // 语法检查：eslint-loader eslint
        /* 设置检查规则：package.json => eslintConfig airbnb
        *   eslint-config-airbnb-base
        *   eslint
        *   eslint-plugin-import
        */
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // 设置
          fix: true
        }
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
  devServer: {// npx webpack serve
    contentBase: resolve(__dirname, "dist"),
    compress: true,// 压缩
    port: 8000,// 端口
    open: true// 自动打开浏览器
  }
}