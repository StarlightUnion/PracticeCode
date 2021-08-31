// eslint-disable-next-line
console.log("index.js已加载");

// import { mul } from "./test";

// eslint-disable-next-line
// console.log(mul)

document.getElementById("btn").onclick = function () {
  // 懒加载
  // 预加载 webpackPrefetch 提前加载js文件 浏览器空闲时加载，不会堵塞正常的资源加载
  import(/* webpackChunkName: "test", webpackPrefetch: true */"./test").then(({ mul }) => {
    // eslint-disable-next-line
    console.log(mul(4, 5));
  })
}