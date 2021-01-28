package com.interface2;

public interface TestInterface {
  // 常量
  public static final int NUM = 10;
  // 抽象方法
  public abstract void a();
  // public、default修饰的非抽象方法
  public default void b() {
    System.out.println("b");
  }
}

class Test implements TestInterface {
  @Override
  public void a() {
    System.out.println("a");
  }

  @Override
  public void b() {// 不能加default

  }

  public void c() {
    // 使用接口中的b方法
    b();// 可以
    // super.b();// 不可以
    TestInterface.super.b();// 可以
  }
}
