// Session: 2015.11
// strategy模式 Created by wxc on 2019/10/24

import java.util.*;
enum TYPE {NORMAL, CASH_DISCOUNT, CASH_RETURN};

interface CashSuper {
    // 1
    public double acceptCash(double money);
}

// 正常收费子类
class CashNormal implements CashSuper {
    public double acceptCash(double money) {
        return money;
    }
}

// 折扣率
class CashDiscount implements CashSuper {
    private double moneyDiscount;
    public CashDiscount(double moneyDiscount) {
        this.moneyDiscount = moneyDiscount;
    }

    public double acceptCash(double money) {
        return money * moneyDiscount;
    }
}

// 满额返利
class CashReturn implements CashSuper {
    private double moneyCondition;
    private double moneyReturn;
    public CashReturn(double moneyCondition, double moneyReturn) {
        this.moneyCondition = moneyCondition;// 满额返利
        this.moneyReturn = moneyReturn;// 返利数额
    }

    public double acceptCash(double money) {
        double result = money;
        if(money >= moneyCondition) {
            result = money - Math.floor(money/moneyCondition) * moneyReturn;
        }
        return result;
    }
}

class CashContext {
    private CashSuper cs;
    private TYPE t;
    public CashContext(TYPE t) {
        switch(t) {
            case NORMAL:// 正常收费
                // 2
                cs = new CashNormal();
                break;
            case CASH_DISCOUNT:// 满300返100
                // 3
                cs = new CashReturn(300, 100);
                break;
            case CASH_RETURN:// 打八折
                // 4
                cs = new CashDiscount(0.8);
                break;
        }
    }

    public double GetResult(double money) {
        // 5
        return cs.acceptCash(money);
    }

    // 省略main()函数
}