/*
 * @Description: 02_constructor.ts
 * @Author: wxc
 * @Date: 2021-03-14 12:26:59
 * @LastEditTime: 2021-03-14 14:11:39
 */

class Dog {
  name: string;
  age: number;

  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中，this就表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    console.log(this);

    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name}wanwanwan`);
  }
}

const dog = new Dog("小黑", 4);
const dog2 = new Dog("小白", 2);
console.log(dog, dog2);

dog2.bark();