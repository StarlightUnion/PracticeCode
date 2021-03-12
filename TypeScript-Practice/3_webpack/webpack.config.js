const path = require('path');

module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 打包输出规则
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  // 指定打包要用的模块
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
};