/*
 * @Description: 01_class.ts
 * @Author: wxc
 * @Date: 2021-03-14 12:26:59
 * @LastEditTime: 2021-03-14 20:35:34
 */

/*
 * 直接定义的属性是实例属性，需要通过对象的实例去访问：
 *    const per = new Person();
 *    per.name
 *
 * 使用static开头的属性是静态属性（类属性），可以直接通过类来访问：
 *    Person.age
 *
 * 使用readonly表示一个只读的属性无法修改
 */
class Person {
  // 定义实例属性
  name: string = "zhangsan";

  // static 定义类属性（静态属性）
  static age: number = 18;

  // readonly
  readonly sex: string = "男";

  // 定义方法
  static sayHello() {
    console.log("hello!");
  }
}

const per = new Person();
console.log(per);
// console.log(per.name, per.age);

console.log(Person.age);
console.log(per.name);

// per.sayHello();
Person.sayHello();