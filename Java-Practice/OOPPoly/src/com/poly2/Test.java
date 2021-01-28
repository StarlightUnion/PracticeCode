package com.poly2;

import sun.jvm.hotspot.ci.ciArrayKlass;

public class Test {
  public static void main(String[] args) {
    // Cat c = new Cat();
    // Gril g = new Gril();
    // g.play(c);

    // Dog d = new Dog();
    // g.play(d);


    // 2.
    Gril g = new Gril();

    Cat c = new Cat();
    Animal an = c;

    g.play(an);
  }
}
