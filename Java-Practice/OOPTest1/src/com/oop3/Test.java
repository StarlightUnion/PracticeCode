import com.oop2.oop3.Person;

public class Test {// 测试类
  public static void main(String[] args) {
    /*
    * 1.一般保证空构造器的存在，空构造器中一般不会进行属性的赋值操作
    * 2.一般我们会重载构造器，在重载的构造器中进行属性赋值操作
    * 3.在重载构造器以后，假如空构造器忘写了，系统不会分配默认的空构造器了，调用就会出错
    */

    // 创建一个Person类的对象/实例
    Person p = new Person();
    System.out.println(p.age);

    Person p2 = new Person("lili", 18, 180.4);
    System.out.println(p2.age);
    System.out.println(p2.name);
    System.out.println(p2.height);
  }
}