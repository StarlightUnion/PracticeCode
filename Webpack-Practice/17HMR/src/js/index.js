import '../index.less';
import '../font/iconfont.css';
import print from "./print";

console.log('index.js被加载了');

print("加载中~~");

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));


// js开启HMR
if (module.hot) {// 确认是否开启hot
  module.hot.accept("./print.js", function () {
    // 监听print.js变化，一旦发生变化，执行回调函数
    print();
  })
}
