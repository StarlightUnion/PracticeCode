const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "dist"),
    chunkFilename: "js/[name].[contenthash:10]_chunk.js"
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
  },
  optimization: {
    // 提取公共代码
    splitChunks: {
      chunks: "all",// 同下
      // 默认值

      // minSize: 30 * 1024,// 分割的chunk最小为30kb
      // maxSize: 0,// 最大没哟限制
      // minChunks: 1,// 要提取的chunk最少被引用一次
      // maxAsyncRequests: 5,// 按需加载时并行请求数量
      // maxInitialRequests: 3,// 入口js文件最大并行请求数量
      // automaticNameDelimiter: "~",// 名称连接符
      // name: true,// 可以使用命名规则
      // cacheGroups: {// 分割chunk的组
      //   // node_modules文件会被打包到vendors组的chunk中 vendors~xxx.js
      //   // 满足规则
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10// 优先级
      //   },
      //   default: {
      //     // 要提取的chunk最少被引用2次
      //     minChunks: 2,
      //     // 优先级
      //     priority: -20,
      //     // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
      //     reuseExistingChunk: true
      //   }
      // }
    },
    runtimeChunk: {
      // 将当前模块的记录其它模块的hash值单独打包为一个文件runtime
      // 解决：修改a文件导致b文件的contenthash变化
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      // 配置生产环境压缩方案：js和css
      new TerserWebpackPlugin({
        cache: true,// 开启缓存
        parallel: true,// 开启多进程打包
        sourceMap: true// 启动source-map
      })
    ]
  }
}