package com.oop3;

public class Person {
  // 属性
  int age;
  String name;
  double height;

  // 空构造器
  public Person() {

  }

  // 构造器的重载
  public Person(String name, int age, double height) {
    // 当形参名字和属性名字重名的时候，会出现就近原则
    this.name = name;
    this.age = age;
    this.height = height;
  }

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // 方法
  public void eat() {
    System.out.println("吃饭");
  }
}