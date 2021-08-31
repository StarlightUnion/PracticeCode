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
    filename: "js/built.js",// 输出文件名
    path: resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, "less-loader"]
      },
      /* 正常来讲，一个文件只能被一个loader处理
      * 当一个文件要被多个loader处理，需要指定loader执行的先后顺序
      *  先执行eslint 再执行babel
      */
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
          name: "[hash:10].[ext]",
          outputPath: "asset"
        }
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
      filename: "css/built.css"
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
  }
}