/*
 * @Description: 03_extends.ts
 * @Author: wxc
 * @Date: 2021-03-14 14:12:30
 * @LastEditTime: 2021-03-14 20:35:44
 */

(function() {
  // 定义一个Animal类
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    bark() {
      console.log("叫");
    }
  }

  /*
   * Dog extends Animal
   * - 此时，Animal被称为父类，Dog被称为子类
   * - 使用继承后，子类将会拥有父类所有的方法和属性
   * - 通过继承可以将多个类中共有的代码写在一个父类中
   *    这样只需要写一次即可让所有的子类都同时拥有父类中的属性
   *    如果希望在子类中添加一些父类中没有的属性或方法直接加就行
   * - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
   *    这种子类覆盖父类方法的形式，我们称之为方法重写
   */
  class Dog extends Animal {
    run() {
      console.log(`${this.name} is running`);
    }

    bark() {
      console.log(`${this.name}汪汪汪`);
    }
  }

  class Cat extends Animal {
    bark() {
      console.log(`${this.name}喵喵喵`);
    }
  }

  const dog = new Dog("旺财", 2)
  const cat = new Cat("咪咪", 3)

  dog.bark();
  dog.run();
  cat.bark();
})();