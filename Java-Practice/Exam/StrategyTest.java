// Session: 2019.05
// Strategy模式 Created by wxc on 2019/10/23

import java.util.*;

interface BrakeBehavior {
    // 1
    public abstract void stop();

    // 代码省略
}

class LongWheelBrake implements BrakeBehavior {
    public void stop() {
        System.out.println("模拟长轮胎刹车痕迹！");
    }
    // 代码省略
}

class ShortWheelBrake implements BrakeBehavior {
    public void stop() {
        System.out.println("模拟短轮胎刹车痕迹！");
    }
    // 代码省略
}

abstract class Car {
    // 2
    protected BreakBehavior wheel;

    // 3
    public void brake() {
        wheel.stop();
        // 代码省略
    }
}

class ShortWheelCar extends Car {
    public ShortWheelCar(BrakeBehavior behavior) {
        // 4
        behavior.stop();
    }
    // 代码省略
}

class StrategyTest {
    public static void main(String[] args) {
        BrakeBehavior brake = new ShortWheelBrake();
        ShortWheelCar car1 = new ShortWheelCar(brake);
        // 5
        car1.brake();
    }
}