package com._super2;

public class Student extends Person {
  double score;

  public Student() {// 空构造器

  }

  public Student(double score) {
    this.score = score;
  }

  public Student(int age, String name, double score) {
    // super.age = age;
    // super.name = name;
    super(age, name);// 上下等价 利用super调用父类的构造器 必须放第一行

    this.score = score;
  }
}
