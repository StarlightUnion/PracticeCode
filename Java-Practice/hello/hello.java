import java.util.Date;

/*
* public 表示该数据成员、成员函数是对所有用户开放的，所有用户都可以直接调用
* private 表示私有，除了该class自己之外，任何人不得调用
* protected 对子数据/函数、朋友来说是public，没有任何限制，而对与其他的外部class，则是private
*/
public class hello {
  public static void main (String[] args) {
    Date date = new Date();
    System.out.println(date.toString());
    System.out.println("Hello world!");
  }
}