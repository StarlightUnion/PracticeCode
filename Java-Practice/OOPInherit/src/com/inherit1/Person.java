package com.inherit1;

public class Person /* extends Object */ {
  private int age;
  private String name;
  private double height;

  // 提供暴露的方法
  public void setAge(int age) {
    this.age = age;
  }

  public int getAge() {
    return age;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setHeight(double height) {
    this.height = height;
  }

  public double getHeight() {
    return height;
  }

  // 方法
  public void eat() {
    System.out.println("吃饭");
  }

  public void sleep() {
    System.out.println("睡觉");
  }
}
