package app;

// 定义了一个方法名为print的方法，实现输出信息功能
public class Test {
  public void print() {
    System.out.println("print");
  }

  // 在main方法中调用print方法
  public static void main(String[] args) {
    Test test = new Test();
    test.print();
  }
}