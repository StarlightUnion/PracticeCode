/* dll: 对某些库（第三方库：如jquery、react、vue等）进行单独打包，与自己写的代码分包处理
*   命令：webpack --config webpack.dll.js
*/

const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {// 最终打包生成的[name] --> jquery
    jquery: ["jquery"],
    // react: ["react", "react-dom", "react-router-dom"]
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
    library: "[name]_[hash]",// 打包的库向外暴露出的变量名
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[hash]",// 映射库的暴露的内容名称
      path: resolve(__dirname, "dist/manifest.json")// 输出文件路径
    })
  ]
}