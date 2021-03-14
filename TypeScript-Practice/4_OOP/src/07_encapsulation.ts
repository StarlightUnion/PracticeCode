/*
 * @Description: 07_encapsulation.ts
 * @Author: wxc
 * @Date: 2021-03-14 20:48:00
 * @LastEditTime: 2021-03-14 21:13:16
 */

(function() {
  // 定义一个表示人的类
  class Person {
    /* 属性修饰符
     * public 修饰的属性可以在任意位置访问（修改），包括子类 默认值
     * private 私有属性，私有属性只能在类内部进行访问（修改）
     *    -通过在类中添加方法使得私有属性可以被外部访问
     * protected 受保护的属性，只能在当前类和当前类的子类访问（修改）
     */
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 获取name
    // getName() {
    //   return this.name;
    // }

    // 设置name
    setName(value: string) {
      this.name = value;
    }

    // 获取年龄
    getAge() {
      return this.age;
    }

    // 设置年龄
    setAge(age: number) {
      this.age = age >= 0 ? age : 0;
    }


    // TS设置getter setter方法
    get _name() {
      return this.name;
    }

    get _age() {
      return this.age;
    }

    set _name(value: string) {
      this.name = value;
    }

    set _age(value: number) {
      this.age = value >= 0 ? value : 0;
    }
  }

  const per = new Person("zhangsan", 13);

  /*
   * 属性是在对象中设置的，属性可以任意修改
   */
  // per.name = "zhangsan";
  // per.age = 14;

  // per.setName("lisi");
  // per.setAge(-33);
  // console.log(per.getName());

  console.log(per._name);
  per._name = "lisi";
  console.log(per._age);
  per._age = 14;


  class A {
    num: number;

    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }
  }

  const b = new B(123);

  class C {
    // 可以直接将属性定义在构造函数中
    constructor(public name: string, public age: number) {}
  }

  const c = new C("xxx", 111);
  console.log(c);
})();