// Session: 2017.05
// builder模式 Created by wxc on 2019/10/20

import java.util.*;

class Pizza {
    private String parts;
    public void setParts(String parts) {
        this.parts = parts;
    }

    public String toString() {
        return this.parts;
    }
}

abstract class PizzaBuilder {
    protected Pizza pizza;
    public Pizza getPizza() {return pizza;}
    public void creatNewPizza() {pizza = new Pizza();}

    // 1
    public abstract void buildParts();
}

class HawaiianPizzaBuilder extends PizzaBuilder {
    public void buildParts() {
        pizza.setParts("cross + mild + ham&pineapple");
    }
}

class SpicyPizzaBuilder extends PizzaBuilder {
    public void buildParts() {
        pizza.setParts("pan baked + hot + pepperoni&salami");
    }
}

class Waiter {
    private PizzaBuilder pizzaBuilder;
    public void setPizzaBuilder(PizzaBuilder pizzaBuilder) {
        // 2 设置构建器
        this.pizzaBuilder = pizzaBuilder;
    }

    public Pizza getPizza() {return pizzaBuilder.getPizza();}
    public void construct() {
        // 构建
        pizzaBuilder.creatNewPizza();
        // 3
        pizzaBuilder.buildParts();
    }
}

class FastFoodOrdering {
    public static void main(String[] args) {
        Waiter waiter = new Waiter();
        PizzaBuilder hawaiian_pizzabuilder = new HawaiianPizzaBuilder();
        // 4
        waiter.setPizzaBuilder(hawaiian_pizzabuilder);
        // 5
        waiter.construct();

        System.out.println("pizza: " + waiter.getPizza());//pizza: cross + mild + ham&pineapple
    }
}