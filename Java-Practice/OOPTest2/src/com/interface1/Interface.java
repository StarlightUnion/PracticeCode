package com.interface1;

// 1.类是类，接口是接口，它们是同一层次的概念，接口中都是抽象的。
// 2.接口中没有构造器
// 3.接口声明：interface
// 4.在JDK1.8之前，接口中只有两部分：
//  (1)常量：固定修饰符：public static final
//  (2)抽象方法：固定修饰符：public abstract
// 注意：修饰符可以省略不写
public interface Interface01 {
  // 常量：
  /* public static final */ int NUM = 10;
  // 抽象方法
  /* public abstract */ void a();
  // /* public abstract */ void b(int num);
  /* public abstract */ int c(String name);
}

interface Interface02 {
  void e();
  void f();
}

// 5.类实现接口
// 6.一旦实现一个接口，那么实现类要重写接口中全部的抽象方法
// 7.如果没有全部重写抽象方法，那么这个类可以变成一个抽象类
// 8.java只有单继承，只能继承一个父类。但是有多实现，实现类实现接口可以实现多个接口
// 9.先extends再implements
class Student extends Person implements Interface01,Interface02 {
  @Override
  public void a() {
    System.out.println("a");
  }

  @Override
  public int c(String name) {
    return 100;
  }

  @Override
  public void e() {
    System.out.println("e");
  }

  @Override
  public void f() {
    System.out.println("f");
  }
}

class Test {
  public static void main(String[] args) {
    // 10.接口不能创建对象
    // Interface02 t = new Interface02();
    Interface02 t = new Student();// 多态

    // 11.访问接口中的常量
    System.out.println(Interface01.NUM);
    System.out.println(Student.NUM);
    Student s = new Student();
    System.out.println(s.NUM);
    System.out.println(t.NUM);
  }
}
