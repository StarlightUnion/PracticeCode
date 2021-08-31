const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: resolve(__dirname, "src"),// 只检查src下文件
        loader: "eslint-loader",
        enforce: "pre",// 优先执行
        // enforce: "post",// 延后执行
      },
      {
        // 只生效一个
        oneOf: []
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: "development",
  // 解析模块的规则
  resolve: {
    // 配置解析模块路径别名，但是没有错误提示
    alias: {
      $css: resolve(__dirname, "src/css"),
    },
    // 配置省略文件路径的后缀名
    extensions: [".js", ".json", ".css"],// => import "./src/js/index" 省略.js
    // 配置webpack解析模块时寻找的目录
    modules: [
      resolve(__dirname, "../node_modules"),
      "node_modules"
    ]
  }
}