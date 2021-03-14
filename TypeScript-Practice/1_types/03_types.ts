/*
 * @Description: 03_types.ts
 * @Author: wxc
 * @Date: 2021-03-08 23:17:49
 * @LastEditTime: 2021-03-09 22:46:57
 */

// ! 字面量
let a: 10;
// a = 11;// 错误

// 多个用|连接
let b: "male" | "female";
b = "male";
// b = "false";// 错误

// 联合类型
let c: boolean | string;
c = true;
c = "hello";


// ! any 表示任意类型 等于对该变量关闭TS类型监测
let d: any;// 等于 let d;
d = 10;
d = "hello";
d = true;


// ! unknown 表示位置类型的值 实际上是类型安全的any，不能直接赋值给其它类型的变量
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;
// s = d; // d的类型是any，它可以复制给任意变量

e = "hello";
// s = e;// 错误 不能将类型“unknown”分配给类型“string”

if (typeof e === "string") {
  s = e;
}

s = e as string;// 类型断言告诉解析器变量的实际类型
s = <string>e;

function fn(): boolean {
  return true;
}


// ! void 用来表示空
function fn1(): void {// void表示没有返回值
}


// ! never 表示永远不会返回结果
function fn2(): never {
  throw new Error("错误");
}
