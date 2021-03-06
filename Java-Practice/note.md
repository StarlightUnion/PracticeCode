# 面向对象

## 追求 高内聚，低耦合

> 高内聚：类的内部数据操作细节自己完成，不允许外部干涉。
>
> 低耦合：仅对外暴露少量的方法用于使用。

隐藏对象内部的复杂性，只对外公开简单的接口，便于外部调用，从而提高系统的可扩展性、可维护性。通俗的说，把该隐藏的隐藏起来，该暴露的暴露出来。这就是封装的设计思想。

## 三大特性

>  封装 Encapsulation 继承 Inheritance 多态 Polymorphism。
>
>  * 类是对对象的抽象
>  * 继承是对类的抽象

### 封装

**概念**：封装是把过程和数据包围起来，对数据的访问只能通过已定义的接口，面向对象计算始于这个基本概念，即现实世界可以被描绘成一系列完全自洽、封装的对象，这些对象通过一个受保护的接口访问其他对象。

在`java`中通过关键字`private`、`protected`和`public`来实现封装。

**好处**：适当的封装可以让代码易于阅读和维护，可以提高代码的安全性。

-> 使用`getter`、`setter`方法

### 继承

**好处**：提高代码的复用性。父类定义的内容，子类可以直接拿来用，不需要反复重复定义。

**要点**：父类`private`修饰的内容，子类实际上也继承，只是因为封装的特性阻碍了直接调用，但是提供了间接调用的方式，可以间接调用。

**总结**：

* 继承关系：`父类/基类/超类`，`子类/派生类`，子类继承父类一定在合理的范围进行继承。
* 继承的好处：
  * 1.提高了代码的复用性，父类定义的内容，子类可以直接拿来用，不需要反复定义。
  * 2.便于代码的扩展。
  * 3.为了多态的使用，是多态的前提。
* 父类`private`修饰的内容，子类也继承过来了。
* 一个父类可以有多个子类。
* 一个子类只能有一个直接父类，但可以间接的继承其它类。
* 继承具有传递性：`Student`继承自`Person`继承自`Object`。
* `Object`是所有类的基类，所有类都直接或者间接的继承`Object`。

> 现有父类，再衍生子类为继承，现有子类，后抽取父类为泛化。

### 多态

**要点**：多态与属性无关，多态指的是方法的多态，而不是属性的多态。

多态就是多种状态：同一个行为，不同的子类表现出来不同的形态。

多态指的就是同一个方法调用，然后由于对象不同会产生不同的行为。

**好处**：提高代码的扩展性（~~反射~~），符合面向对象的设计原则：开闭原则。

> 开闭原则：指的是扩展是开放的，修改是关闭的。

**多态的要素**：

* 1.继承

* 2.重写：子类对父类的方法的重写。

* 3.父类引用指向子类对象。

  > ```java
  > Pig p = new Pig();
  > Animal an = p;
  > ```
  >
  > =>
  >
  > ```java
  > Animal an = new Pig();
  > // 左侧：编译期类型
  > // 右侧：运行期类型
  > ```


**应用**：父类当做方法的形参，然后传入的是具体的子类的对象，然后调用同一个方法，根据传入的子类的不同展现出来的效果也不同，构成了多态。

```java
public void play(Animal an) {// Animal an = new Pig();
  an.shout();
}
```



## 权限修饰符

|             | 同一个类 | 同一个包 | 子类 | 所有类 |
| ----------- | -------- | -------- | ---- | ------ |
| `private`   | *        |          |      |        |
| `default`   | *        | *        |      |        |
| `protected` | *        | *        | *    |        |
| `public`    | *        | *        | *    | *      |

* `private`：只能在同一个类中访问，不同类中不能访问。
* `default`：缺省修饰符。同一个包下的其它类都能访问。
* `protected`：同一个类、包，以及子类都能访问。
* `public`：在项目中都能访问。

>  类的修饰符可以用缺省、`public`修饰。
>
> 属性用`private`修饰，方法用`public`修饰。

## 方法的重写

**发生**：发生在子类和父类中，当子类对父类的方法不满意的时候，要对父类的方法进行重写。

**要求**：子类的方法名要和父类必须一致，参数列表（个数，类型，顺序）也要完全一样。

|      | en       | 位置       | 修饰符                     | 返回值               | 方法名   | 参数     | 抛出异常 | 方法体 |
| ---- | -------- | ---------- | -------------------------- | -------------------- | -------- | -------- | -------- | ------ |
| 重载 | overload | 同一个类中 | 无关                       | 无关                 | 必须相同 | 必须不同 | 无关     | 不同   |
| 重写 | override | 子类父类中 | 父类的权限修饰符要低于子类 | 父类的返回值大于子类 | 必须相同 | 必须相同 | 小于等于 | 不同   |

## super

### 修饰属性护方法

在子类的方法中，可以使用`super.属性`、`super.方法`调用父类的内容。

在特殊情况下，当子类和父类的属性或方法重名时，要想使用父类的属性或方法，只能通过`super`调用。

### 修饰构造器

* 每一个空构造器的第一行都有`super()`，作用是调用父类的空构造器，只是一般省略不写。
* 如果构造器中已经显示的调用`super`父类构造器，那么它的第一行就没有默认分配的`super`。
* 在构造器中，`super`调用构造器和`this`调用子类构造器只能存在一个，二者不能共存，因为`super`修饰构造器必须放在第一行，`this`修饰构造器也必须放在第一行。
* 其实平时写的构造器的第一行都有`super()`，作用是：调用父类的空构造器，只是一般都省略不写（所有构造器的第一行默认情况下都有`super()`，但是一旦在构造器中**显式**的使用`super`调用了父类构造器，那么这个`super()`就不会是默认的了。如果**没有显式的调用构造器**，那么第一行`super`可以省略不写。

## `final`

* `final`修饰一个变量，变量的值不可以改变，这个变量就变成了一个字符常量，约定俗成的规定：名字大写。

* `final`修饰引用数据类型，那么地址不可以改变，但是对象的属性可以改变。

* `final`修饰方法，该方法不能被该类的子类重写。

  ```java
  public class Person {
    public final void eat() {
      System.out.println("吃饭");
    }
  }

  class Student extends Person {
    // @Override
    // public void eat() {
    //   super.eat();
    // }
  }
  ```

* `final`修饰类，代表没有子类，该类不可以被继承：

  一旦一个类被`final`修饰，那么里面的方法也没有必要用`final`修饰了（final可省略不写）。

  ```java
  public final class Person {
    public void eat() {
      System.out.println("吃饭");
    }
  }

  class Student extends Person {
    @Override
    public void eat() {//
      super.eat();
    }
  }
  ```

## 抽象类`abstract`

* 1.**抽象类和抽象方法**：抽象类中可以定义0-n个抽象方法；
* 2.**抽象类的作用**：在抽象类中定义抽象方法，目的是为了为子类提供一个通用的模板，子类可以在模板的基础上进行开发，先重写父类的抽象方法，然后可以扩展子类自己的内容，抽象类设计避免了子类设计的随意性，通过抽象类，子类的设计变得更加严格，进行某些程度上的限制。

### 题目

* 1.抽象类不能创建对象，那么抽象类中国是否有构造器？

  一定有构造器，构造器的作用是给子类初始化对象的时候要先super调用父类的构造器。

* 2.抽像类是否可以被final修饰？

  不能被final修饰，抽象类设计的初衷就是给子类继承用的，要是被final修饰了这个抽象类，就不存在继承，就没有子类。

## 接口`interface`

> * 在JDK1.8之前，接口中只有两部分内容：
>
>   * 1.常量：固定修饰符：`public`、`static`、`final`
>   * 2.抽象方法：固定修饰符：`public`、`abstract`
>
> * 在JDK1.8之后，新增非抽象方法：
>
>   * 1.被`public`、`default`修饰的非抽象方法。
>
>     > * 1.`default`修饰符必须加上。
>     > * 2.实现类中要是想重写接口中的非抽象方法，那么`default`修饰符必须不能加
>
>   * 2.静态方法：
>
>     > * 1.`static`不可以省略不写
>     > * 2.静态方法不能重写
>
> * 为什么加入静态方法？
>
>   > 如果接口中只能定义抽象方法的话，那么我要是修改接口中的内容，那么对实现类的影响太大了，所有实现类都会受影响。现在在接口中加入非抽象方法，对实现类没有影响。

* 作用：定义规则，定义好接口后，实现类负责实现即可。

* 继承：子类对父类的继承

  实现：实现类对接口的实现