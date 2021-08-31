const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",// 输出文件名
    path: resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        // 处理less资源
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        // 处理less资源
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          esModule: false,// webpack5修复
          outputPath: "images"
        }
      },
      {
        // 处理html中的img资源
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "asset"
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