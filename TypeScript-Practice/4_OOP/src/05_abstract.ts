/*
 * @Description: 05_abstract.ts
 * @Author: wxc
 * @Date: 2021-03-14 18:32:11
 * @LastEditTime: 2021-03-14 20:34:55
 */

(function() {
  /*
   * abstract修饰抽象类
   *    抽象类不能用来被创建对象，就是专门用来被继承的类
   */
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象类重写
    abstract bark():void;
  }

  class Dog extends Animal {
    bark() {
      console.log("汪汪汪");
    }
  }

  const dog = new Dog("旺财");
  dog.bark();
})();