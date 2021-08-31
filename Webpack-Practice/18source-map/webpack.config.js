const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/index.html"],
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
    open: true,// 自动打开浏览器
    hot: true// HMR => hot module replacement
  },
  devtool: "source-map"
}

/* source-map: 源代码 到 构建后代码 映射的技术
* [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
*
* inline-source-map 内联 生成一个source-map
* hidden-source-map 外部 生成外部source-map文件 隐藏源码
* eval-source-map 内联 每一个文件生成一个source-map
* nosources-source-map 外部 隐藏源码
* cheap-source-map 外部
* cheap-module-source-map 外部
*
* 速度：eval>inline>cheap>...
* eval-cheap-source-map
* eval-source-map
* 调试友好：
* souce-map
* cheap-module-souce-map
* cheap-source-map
* 隐藏源代码：
* nosources-source-map 全部隐藏
* hidden-source-map 只隐藏源代码，会提示构建后代码错误信息
*/