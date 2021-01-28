package com.oop;

public class Student {
  int c; // 成员变量：在类中方法外
  byte e;
  short s;
  long num2;
  float f;
  double d;
  char ch;
  boolean bo;
  String name;// 引用类型

  public void study() {
    int num = 10; // 局部变量：在方法中 一定要初始化
    System.out.println(num);
    {
      int a; // 局部变量：在代码块中
    }

    if (1 == 3) {
      int b;
    }

    System.out.println(c);
  }

  public void eat() {
    System.out.println(c);
  }

  public static void main(String[] args) {
    Student s = new Student();
    System.out.println(s.c);// 0
    System.out.println(s.e);// 0
    System.out.println(s.s);// 0
    System.out.println(s.num2);// 0
    System.out.println(s.f);// 0.0
    System.out.println(s.d);// 0.0
    System.out.println(s.ch);// (空格)
    System.out.println(s.bo);// false
    System.out.println(s.name);// null
  }
}
