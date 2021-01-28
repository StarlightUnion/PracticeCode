package com.oop;

public class Person {
  // 属性
  int age;
  String name;
  double height;
  double weight;

  // 方法
  public void eat() {
    System.out.println("吃饭");
  }

  public void sleep(String address) {
    System.out.println("我在" + address + "睡觉");
  }

  public String introduce() {
    return "我的名字是：" + name + "，我的年龄是：" + age + "，我的身高是：" + height + "，我的体重是：" + weight;
  }
}