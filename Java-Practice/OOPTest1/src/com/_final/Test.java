package com._final;

public class Test {
  public static void main(String[] args) {
    // 1
    final int A = 10;
    // A = 20;// 不能再次修改

    // 2
    final Dog d = new Dog();
    // d = new Dog();// 修饰引用数据类型，那么地址不可以改变
    d.age = 10;
    d.weight = 13.7;

    // 3
    final Dog d2 = new Dog();
    a(d2);

    // 4
    b(d2);
  }

  public static void a(Dog d) {
    d = new Dog();
  }

  public static void b(final Dog d) {// 被final修饰了，指向不能改变
    // d = new Dog();
  }
}