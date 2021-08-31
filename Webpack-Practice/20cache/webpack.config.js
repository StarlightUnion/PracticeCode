const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

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
        collapseWhitespace: true,// 移除空格
        removeComments: true// 移除注释
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.[chunkhash:10].css"
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  // 模式
  // mode: "development",
  mode: "production",// 生产环境下会自动压缩js代码
  devServer: {// npx webpack serve
    contentBase: resolve(__dirname, "dist"),
    compress: true,// 压缩
    port: 8000,// 端口
    open: true,// 自动打开浏览器
    hot: true// 热更新
  },
  devtool: "source-map"
}

/* 缓存：
* * babel缓存：cacheDirectory
*  --使第二次打包构建更快
* * 文件/浏览器缓存：hash值命名文件 hash|chunkhash|contenthash
*   chunkhash：根据chunk生成hash值，如果打包来自于同一个chunk，那么他们的hash值就一样
*     css是在js中被引入的，属于同一个chunk
*   contenthash：根据文件内容生成hash值
*  --使代码上线运行时缓存更好
*/