/*
 * @Descripttion: demo2-static-type
 * @Author: wxc
 * @Date: 2021-02-20 00:06:36
 * @LastEditTime: 2021-02-20 00:09:17
 */

let count: number = 1;

interface xjj {
  uname: string,
  age: number
}

const xh: xjj = {
  uname: "小明",
  age: 18
}

console.log(xh.age);