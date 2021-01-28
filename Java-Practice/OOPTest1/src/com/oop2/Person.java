package com.oop2;

public class Person {
  // 构造器：没有任何参数的构造器叫 空参构造器 --> 空构造器
  public Person() {
    // age = 19;
    // name = "lili";
    // height = 169.5;
  }

  // 属性
  int age;
  String name;
  double height;
  double weight;

  // 方法
  public void eat() {
    System.out.println("吃饭");
  }
}