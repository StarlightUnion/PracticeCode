package com.encap2;

public class Test {
  public static void main(String[] args) {
    Student s1 = new Student();
    s1.setName("lisi");
    s1.setAge(19);
    s1.setSex("男");
    System.out.println(s1.getName() + " " + s1.getAge() + " " + s1.getSex());

    Student s2 = new Student(18, "zhangsan", "男");
    System.out.println(s2.getName() + " " + s2.getAge() + " " + s2.getSex());
  }
}
