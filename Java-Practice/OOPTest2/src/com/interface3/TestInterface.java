package com.interface3;

public interface TestInterface {
  void a();
  void b();
  public default void c() {

  }
}

class Test01 implements TestInterface {
  @Override
  public void a() {

  }

  @Override
  public void b() {

  }
}

class Test02 implements TestInterface {
  @Override
  public void a() {

  }

  @Override
  public void b() {

  }
}
