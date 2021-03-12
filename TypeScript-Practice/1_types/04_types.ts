/*
 * @Descripttion: 04_types.ts
 * @Author: wxc
 * @Date: 2021-03-08 23:35:35
 * @LastEditTime: 2021-03-09 23:03:41
 */

// ! object 表示一个js对象
let _a: object;
_a = {};
_a = function() {}

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值}
// 在属性名后面加上?，表示属性是可选的
let _b: { name: string, age?: number };

_b = { name: "zhangsan" };
_b = { name: "zhangsan", age: 18 };

// [propName: string]: any 表示任意类型的属性
let _c: { name: string, [propName: string]: any };
_c = { name: "lisi", age: 18, gender: "男" }

// 函数的类型声明：(形参: 类型, ...) => 返回值类型
let _d: (a: number, b: number) => number;
_d = function(n1, n2): number {
  return n1 + n2;
}


// ! array
/*
 * type[]
 * Array<type>
 */
let _e: string[];
_e = ['a', 'b', 'c'];

let _f: number[];
let _g: Array<number>;
_g = [1, 2, 3];


// ! tuple 元组，长度固定的数组
let h: [string, number];
h = ['hello', 123];


// ! enum 枚举
enum Gender {
  Male,
  Female
}

let i: { name: string, gender: Gender };
i = {
  name: 'zhangsan',
  gender: Gender.Male
}

console.log(i.gender === Gender.Male);

// & 表示同时
let j: { name: string } & { age: number };
j = { name: 'zhangsan', age: 18 };

// 类型的别名
type myType = 1 | 2 | 3 | 4;
let k: myType;
k = 1;
// k = 5;// 错误

