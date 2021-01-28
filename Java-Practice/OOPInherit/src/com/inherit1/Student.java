package com.inherit1;

public class Student extends Person {// 子类Student 继承父类 Person
  private int son;// 学号

  public int getSon() {
    return son;
  }

  public void setSon(int son) {
    this.son = son;
  }

  // 方法
  public void study() {
    System.out.println("学习");
  }
}
