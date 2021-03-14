/*
 * @Description: 02_basis.ts
 * @Author: wxc
 * @Date: 2021-03-08 23:01:08
 * @LastEditTime: 2021-03-14 20:36:24
 */

let a: number;// 指定a的类型为number且不能修改
let b: string;

a = 10;
// a = "";// 错误

b = "hello";


// 声明变量直接赋值 TS会自动对变量进行类型检查
let c: boolean = false;


// 函数参数类型声明
function sum(a: number, b: number) {
  return a + b;
}

sum(123, 456);