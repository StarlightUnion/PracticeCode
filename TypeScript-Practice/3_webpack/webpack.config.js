const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts", // 指定入口文件
  output: { // 打包输出规则
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false // 关闭webpack打包生成的箭头函数
    }
  },
  devtool: "inline-source-map",
  resolve: { // 用来设置引用模块
    extensions: [".ts", ".js"]
  },
  module: { // 指定打包要用的模块
    rules: [{
      test: /\.ts$/,
      use: [
        // 配置babel
        {
          loader: "babel-loader",
          options: {
            // 设置预定义的环境
            presets: [
              [
                // 指定环境的插件
                "@babel/preset-env",
                // 配置信息
                {
                  // 要兼容的目标
                  targets: {
                    "chrome": "88",
                    "ie": "11"
                  },
                  // 指定corejs版本
                  "corejs": "3",
                  // 使用corejs的方式 "usage"表示按需加载
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        },
        "ts-loader"
      ],
      exclude: /node_modules/
    }]
  },
  plugins: [ // 配置webpack插件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};