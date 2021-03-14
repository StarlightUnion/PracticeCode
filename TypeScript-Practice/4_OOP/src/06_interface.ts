/*
 * @Description: 06_interface.ts
 * @Author: wxc
 * @Date: 2021-03-14 18:39:52
 * @LastEditTime: 2021-03-14 20:48:44
 */

(function() {
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number
  };

  /*
   * 接口用来定义一个类结构， 用来定义一个类中应该包含哪些方法和属性
   *    同时接口也可以当成类型声明去使用
   */
  interface myInterface {
    name: string,
    age: number
  }

  interface myInterface {
    gender: string;
  }

  const obj:myInterface = {
    name: "sss",
    age: 11,
    gender: "男"
  }

  /*
   * 接口可以在定义类的时候去限制类的结构
   *    接口中的所有属性都不能有实际的值
   *    接口只定义对象的结构，而不考虑实际值
   *      在接口中所有的方法都是抽象方法
   */
  interface myInter {
    name: string;
    bark():void;
  }

  /*
   * 定义类时，可以使类去实现一个接口
   *    实现接口就是使类满足接口的要求
   */
  class MyClass implements myInter {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    bark() {
      console.log("hhh");
    }
  }
})();