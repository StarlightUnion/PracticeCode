import { mul } from './test';
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
// eslint-disable-next-line
console.log(mul(1, 2));

/*
* 1.修改package.json中的eslintConfig配置
*   "env": {
*     "browser": true// 支持浏览器的全局变量
* }
*
* 2.使用serve快速创建服务器环境
*   sw需运行在服务器端
*   serve -s dist
*/
// 注册serviceworker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        // eslint-disable-next-line
        console.log("serviceworker注册成功");
      })
      .catch(() => {
        // eslint-disable-next-line
        console.log("serviceworker注册失败");
      });
  });
}
