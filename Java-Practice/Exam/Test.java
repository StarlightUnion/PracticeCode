// Session: 2018.05
// builder模式 Created by wxc on 2019/10/22

import java.util.*;

class Product {
      private String partA;
      private String partB;
      public Product() {}
      public void setPartA(String s) { partA = s;}
      public void setPartB(String s) { partB = s;}
}

interface Builder {
     public void buildPartA();// 1
     public void buildPartB();
     public Product getResult();// 2
}

class ConcreteBuilder1 implements Builder {
      private Product product;
      public ConcreteBuilder1() {product = new Product(); }
      public void buildPartA() {product.setPartA("Component A");}// 3
      public void buildPartB() {product.setPartA("Component B");}// 4
      public Product getResult() {return product;}
}
class ConcreteBuilder2 implements Builder {
      // 代码省略
}

class Director {
      private Builder builder;
      public Director(Builder builder) {this.builder = builder;}
      public void construct() {
        // 5
        builder.buildPartA();
        builder.buildPartB();
        // Product p = builder.getResult();
        // 代码省略
      }
}

class Test{
      public static void main(String[]args) {
           Director director1 = new Director(new ConcreteBuilder1());
           directorl.construct();
      }
}