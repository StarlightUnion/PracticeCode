/*
 * @Description: 08_generic.ts
 * @Author: wxc
 * @Date: 2021-03-14 21:14:21
 * @LastEditTime: 2021-03-14 21:54:32
 */

// function fn(a: any): any {
//   return a;
// }

/*
 * 在定义函数或是类时，如果遇到类型不确定的可以使用泛型
 */
function fn<T>(a: T): T {
  return a;
}

fn(10);// 不指定泛型，TS根据输入自动判断类型
fn<string>("hello");// 指定泛型

// 同时指定多个泛型
function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}
fn2<number, string>(123, "hello");


interface inter {
  length: number;
}
// 表示泛型T必须是inter的实现类（子类）
function fn3<T extends inter>(a: T): number {
  return a.length;
}


class MyClass<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

const mc = new MyClass<string>("zhansan");