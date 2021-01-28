package com.encap2;

public class Student {
  private int age;
  private String name;
  private String sex;

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getSex() {
    return sex;
  }

  public void setSex(String sex) {
    if ("男".equals(sex) || "女".equals(sex)) {
      this.sex = sex;
    } else {
      this.sex = "男";
    }
  }

  // 空构造器
  public Student() {}

  // 有参构造器
  public Student(int age, String name, String sex) {
    this.age = age;
    this.name = name;

    // this.sex = sex;
    this.setSex(sex);
  }
}
