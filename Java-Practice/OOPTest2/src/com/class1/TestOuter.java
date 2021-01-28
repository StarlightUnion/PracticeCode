package com.class1;

/*
* 1.类的组成：属性，方法，构造器。代码块（普通块，静态块，构造块，同步块），内部类
* 2.一个类TestOuter的内部类SubTest叫内部类，内部类：SubTest 外部类：TestOuter
* 3.内部类：成员内部类 和 局部内部类（位置：可以在方法内，块内，构造器内）
* 4.成员内部类：
*   里面属性，方法，构造器等
*   修饰符：private、default、protect、public、final、abstract
*/
public class TestOuter {
  // 属性
  int age;
  // 方法
  public void a() {
    System.out.println("a");
  }
  // 构造器
  public TestOuter() {

  }

  public TestOuter(int age) {
    this.age = age;
  }

  // 代码块
  public void code() {
    System.out.println("code");
    {// 普通块
      System.out.println("普通块");
    }
  }

  static {// 静态块
    System.out.println("静态块");
  }
  {
    System.out.println("构造块");
  }

  // 内部类
  public void i() {
    System.out.println("i");
    {
      class A {

      }
    }
    class B {

    }
  }

  // 成员内部类
  class a1 {

  }

  // 静态成员内部类
  static class a2 {

  }

}
