package com.inherit1;

public class Test {
  public static void main(String[] args) {
    // 创建子类Studeng对象
    Student s = new Student();
    s.setSon(1001);
    s.setAge(18);
    s.setName("zhangsan");
    s.setHeight((180.4));

    System.out.println("学生名字是" + s.getName() + "，学生年龄是" + s.getAge());
  }
}
