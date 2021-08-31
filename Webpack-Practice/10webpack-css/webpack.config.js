const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 设置环境变量
// process.env.NODE_ENV = "development";

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
        test: /\.css$/,
        use: [
          // "style-loader",// 创建<style>标签放入样式
          MiniCssExtractPlugin.loader,// 提取css成单独文件
          "css-loader",// 将css整合到js中
          // css兼容性处理 postcss => postcss-loader postcss-preset-env
          // 帮postcss找到package.json中的browserslist里面的配置，通过配置加载指定的css兼容性样式
          // 1.使用loader的默认配置
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: () => [
                  require("postcss-preset-env")()
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css"
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