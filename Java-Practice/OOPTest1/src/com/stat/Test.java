package com.stat;

public class Test {
  // 属性
  int id;
  static int sid;

  public static void main(String[] args) {
    Test t1 = new Test();
    t1.id = 10;
    t1.sid = 10;

    Test t2 = new Test();
    t2.id = 20;
    t2.sid = 20;

    Test t3 = new Test();
    t3.id = 30;
    t3.sid = 30;

    // 打印
    System.out.println(t1.id);// 10
    System.out.println(t2.id);// 20
    System.out.println(t3.id);// 30

    System.out.println(t1.sid);// 30
    System.out.println(t2.sid);// 30
    System.out.println(t3.sid);// 30

    // 静态的内容先于对象存在，被所有该类的对象共享。存放在静态域中
    // 直接通过类来访问
    Test.sid = 100;
    System.out.println(Test.sid);
  }
}
