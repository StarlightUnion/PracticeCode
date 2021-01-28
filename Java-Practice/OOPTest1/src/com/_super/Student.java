package com._super;

public class Student extends Person {
  double score;

  public void study() {
    System.out.println("学习");
  }

  public void a() {
    System.out.println(age);
    System.out.println(super.age);// super指父类 上下等价
    eat();
    super.eat();// 上下等价
  }
}
