/*
 * @Description: index.ts
 * @Author: wxc
 * @Date: 2021-03-12 23:26:13
 * @LastEditTime: 2021-03-14 20:36:00
 */
import { module } from "./module";

function sum(a: number, b: number):number {
  return a + b;
}

const obj = {
  name: "zhangsan",
  age: 18
}

console.log(obj);

obj.age = 20;
console.log(obj);

console.log(sum(123, 456));
console.log(module());

// console.log(Promise);

let fn = (a: number, b: number) => a + b;
fn(123, 456);