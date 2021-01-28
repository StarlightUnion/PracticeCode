public class Test {// 测试类
  public static void main(String[] args) {
    // 创建一个对象，对象名字是：zhangsan
    // Person 属于引用数据类型
    Person zhangsan = new Person();
    zhangsan.name = "张三";
    zhangsan.age = 19;
    zhangsan.height = 180.4;
    zhangsan.weight = 170.4;

    zhangsan.eat();// 测试输出

    Person lisi = new Person();
    lisi.name = "李四";
    lisi.age = 19;
    lisi.height = 170.6;
    lisi.weight = 130.4;

    System.out.println(zhangsan.name);
    System.out.println(lisi.age);

    zhangsan.sleep("家");
  }
}