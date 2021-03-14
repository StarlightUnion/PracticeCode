/*
 * @Description: 04_super.ts
 * @Author: wxc
 * @Date: 2021-03-14 18:32:11
 * @LastEditTime: 2021-03-14 18:48:33
 */

(function() {
  class Animal {// Animal是超类/基类
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    bark() {
      console.log("叫");
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数，在子类构造函数中必须调用父类的super
      super(name);
      this.age = age;
    }

    bark() {
      // 在类的方法中super表示当前类的父类
      super.bark();
    }
  }

  const dog = new Dog("旺财", 5);
  dog.bark();
})();