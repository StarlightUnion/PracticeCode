// Created by wxc on 2019/10/24

package app;

// 方法的重载
public class Reload {
  public void show() {
    System.out.println("welcome");
  }

  public void show(String name) {
    System.out.println("welcome:" + name);
  }

  public void show(String name, int age) {
    System.out.println("welcome:" + name);
    System.out.println("age:" + age);
  }

  public void show(int age, String name) {
    System.out.println("welcome2:" + name);
    System.out.println("age2:" + age);
  }

  public static void main(String[] args) {
    Reload reload = new Reload();
    reload.show();// welcome
    reload.show("tom");// welcome:tom
    reload.show("jack", 20);// welcome:jack \n  age:20 \n
    reload.show(20, "jack");// welcome2:jack \n  age2:20 \n
  }
}