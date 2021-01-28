package com.oop4;

public class Test {
  int a;
  static int sa;

  public void a() {
    System.out.println("-----a");
    {
      // 普通块限制了局部变量的作用范围
      System.out.println("-----00000");
      int num = 10;
      System.out.println(num);
      System.out.println("普通块");
    }
    // System.out.println(num);
  }

  public static void b() {
    System.out.println("-----b");
  }

  // 构造块
  {
    System.out.println("构造块");
  }

  // 静态块
  static {
    // 只能访问静态属性和静态方法
    System.out.println("静态块");
    System.out.println(sa);
    b();
  }

  // 构造器
  public Test(int a) {
    this.a = a;
  }

  // 空构造器
  public Test() {
    System.out.println("空构造器");
  }

  public static void main(String[] args) {
    Test t = new Test();
    t.a();

    Test t2 = new Test();
    t2.a();
  }

  // 总结：
  // 代码块执行顺序：
  // -> 最先执行静态块，只在类加载的时候执行一次，一般放入工厂、数据库的初始化信息，都放入静态块。
  // 一般用于执行一些全局性的初始化操作
  // -> 接着是构造块，
  // -> 接着是构造器
  // -> 接着是普通块
}
