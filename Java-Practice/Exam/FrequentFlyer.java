// Session: 2018.11
// state模式 Created by wxc on 2019/10/22

import java.util.*;

abstract class CState {
    public int flyMiles;// 里程数

    // 1
    public abstract double travel(int miles, FrequentFlyer context);//根据累计里程数调整会员等级
}

class CNoCustomer extends CState {
    // 非会员
    public double travel(int miles, FrequentFlyer context) {
        System.out.println("Your travel will not account for points");
        return miles;// 不累计里程数
    }
}

class CBasic extends CState {
    // 普卡会员
    public double travel(int miles, FrequentFlyer context) {
        if(context.flyMiles >= 25000 && context.flyMiles < 50000) {
            // 2
            context.setState(new CSilver());
        }

        if(context.flyMiles >= 50000) {
            // 3
            context.setState(new CGold());
        }

        return miles;
    }
}

class CGold extends CState {
    // 金卡会员
    public double travel(int miles, FrequentFlyer context) {
        if(context.flyMiles >= 25000 && context.flyMiles < 50000) {
            // 4
            context.setState(new CSilver());
        }

        if(context.flyMiles <= 25000) {
            // 5
            context.setState(new CBasic());
        }

        return miles + 0.5 * miles;// 累计里程数
    }
}

class CSilver extends CState {
    // 银卡会员
    public double travel(int miles, FrequentFlyer context) {
        if(context.flyMiles <= 25000) {
            context.setState(new CBasic());
        }

        if(context.flyMiles >= 50000) {
            context.setState(new CGold());
        }

        return miles + 0.25 * miles;// 累计里程数
    }
}

class FrequentFlyer {
    CState state;
    double flyMiles;
    public FrequentFlyer() {
        state = new CNoCustomer();
        flyMiles = 0;
        setState(state);
    }

    public void setState(CState state) {this.state = state;}
    public void travel(int miles) {
        double bonusMiles = state.travel(miles, this);
        flyMiles = flyMiles + bonusMiles;
    }
}