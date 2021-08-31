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
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",// 优先执行
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        oneOf: [// 以下loader只会匹配一个 => 不能有两个loader处理同一类型文件
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 按需加载
                    useBuiltIns: "usage",
                    // 指定core-js版本
                    corejs: {
                      version: 3
                    },
                    // 指定兼容性做到哪个版本
                    targets: {
                      chrome: "60",
                      firefox: "60",
                      ie: "9",
                      safari: "10",
                      edge: "17"
                    }
                  }
                ]
              ]
            }
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