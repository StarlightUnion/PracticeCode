/*
 * @Descripttion: 04_types.ts
 * @Author: wxc
 * @Date: 2021-03-08 23:35:35
 * @LastEditTime: 2021-03-08 23:41:34
 */

// object 表示一个js对象
let _a: object;
_a = {};
_a = function() {}

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值}
// 在属性名后面加上?，表示属性是可选的
let _b: {
  name: string,
  age?: number
};

_b = {
  name: "zhangsan"
};

