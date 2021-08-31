const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./src/index.js",// 打包形成一个chunk，输出一个bundle文件
  // entry: [// 多入口，所有入口文件最终只会形成一个chunk，输出一个bundle文件 => 让html热更新生效
  //   "./src/index.js",
  //   "./src/add.js"
  // ],
  entry: {// 多入口，有几个入口文件就生成几个chunk，输出几个bundle，chunk的名称是key
    index: "./src/index.js",
    add: "./src/add.js"
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: "development"
}

/*
  1.string 打包形成一个chunk，输出一个bundle文件
  2.array 多入口，所有入口文件最终只会形成一个chunk，输出一个bundle文件 => 让html热更新生效
  3.object 多入口，有几个入口文件就生成几个chunk，输出几个bundle，chunk的名称是key
  4.特殊用法
  entry: {
    // 所有入口文件最终只会生成一个chunk，输出出去只有一个bundle文件
    index: ["./src/index.js", "./src/count.js"],
    // 生成一个chunk，输出一个bundle文件
    add: "./src/index.js"
  }
*/