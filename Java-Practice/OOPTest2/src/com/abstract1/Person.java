package com.abstract1;

// 4.一个类中如果有方法是抽象方法，那么这个类也要是一个抽象类
// 5.一个抽象类中可以有0-n个抽象方法
public abstract class Person {
  // 1.无需子类重写的方法，直接使用
  public void eat() {
    System.out.println("eat");
  }

  // 2.需要子类对其进行重写的方法
  // 3.一个方法的方法体去掉，然后被abstract修饰，那么这个方法就变成了一个抽象方法。
  public abstract void say();
  public abstract void sleep();
}

// 6.抽象类可以被其他类继承
// 7.一个类继承一个抽象类，那么这个类可以变成抽象类
// 8.一般子类不会加abstract修饰，一般会让子类重写父类中的抽象方法
// 9.子类继承抽象类，就必须重写全部的抽象方法
// 10.子类如果没有重写父类全部的抽象方法，那么子类也可以变成一个抽象类
class Student extends Person {
  @Override
  public void say() {
    System.out.println("say hello");
  }

  @Override
  public void sleep() {
    System.out.println("sleep");
  }
}

class Demo {
  public static void main(String[] args) {
    // 11.创建抽象类的对象： --> 抽象类不能创建对象
    // Person p = new Person();

    // 12.创建抽象类的对象：
    Student s = new Student();
    s.sleep();
    s.say();

    // 13.多态的写法：父类的引用指向子类
    Person p = new Student();
  }
}
