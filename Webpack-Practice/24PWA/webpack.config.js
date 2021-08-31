const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

process.env.NODE_ENV = "production";

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
    // css兼容性处理
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
];

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.[contenthash:10].js",// 输出文件名
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
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, "less-loader"]
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
              ],
              cacheDirectory: true
            }
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
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
              name: "[contenthash:10].[ext]",
              outputPath: "asset"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.[chunkhash:10].css"
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,// 帮助serviceworker快速启动
      skipWaiting: true// 删除旧的serviceworker
    })
  ],
  // 模式
  // mode: "development",
  mode: "production",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 8000,
    open: true,
    hot: true
  },
  devtool: "source-map"
}

/* PWA：渐进式网络开发应用程序（离线可访问）
*   workbox: workbox-webpack-plugin
*
*
*
*
*
*/