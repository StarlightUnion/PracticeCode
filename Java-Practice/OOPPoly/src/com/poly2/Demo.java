package com.poly2;

public class Demo {
  public static void main(String[] args) {
    Pig p = new Pig();
    Animal an = p;// 转型：向上转型
    an.shout();

    Pig pig = (Pig)an;// 转型：向下转型
    pig.eat();
    pig.age = 10;
    pig.weight = 60.8;
  }
}