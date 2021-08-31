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
  resolve: {
    alias: {
      $css: resolve(__dirname, "src/css"),
    },
    extensions: [".js", ".json", ".css"],
    modules: [
      resolve(__dirname, "../node_modules"),
      "node_modules"
    ]
  },
  devServer: {
    // 运行代码的目录
    contentBase: resolve(__dirname, "dist"),
    // 监视contentBase目录下的所有文件，文件变化会reload
    watchContentBase: true,
    watchOptions: {
      // 忽略文件
      ignored: "/node_modules/"
    },
    // 启动gzip压缩
    compress: true,
    port: 5000,
    host: "localhost",
    open: true,// 自动打开浏览器
    hot: true,// HMR
    clientLogLevel: "none",// 不显示启动服务器日志信息
    quiet: true,// 除了基本启动信息外不显示其他信息
    overlay: false,// 如果出错不要全屏提示
    // 服务器代理 解决开发环境下跨域问题
    proxy: {
      "/api": {
        target: "http://locahost:8888",
        pathRewrite: {// 发送请求时去掉 /api
          "^/api": ""
        }
      }
    }
  }
}