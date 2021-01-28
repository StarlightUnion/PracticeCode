package com.stat;

public class Student {
  String name;
  int age;
  static String school;

  public static void main(String[] args) {
    Student.school = "小学";

    Student s1 = new Student();
    s1.name = "张三";
    s1.age = 18;
    // s2.school = "小学";

    Student s2 = new Student();
    s2.name = "李四";
    s2.age = 19;
    // s2.school = "小学";

    // 某些数据想在内存中共享，可以用static修饰
  }
}
