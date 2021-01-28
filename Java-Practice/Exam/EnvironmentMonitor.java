// Session: 2014.05
// observer模式 Created by wxc on 2019/10/25

import java.util.*;

interface Observer {
    public void update(float temp, float humidity, float cleanness);
}

interface Subject {
    public void registerObserver(Observer o);// 注册对主题感兴趣的观察者
    public void removeObserver(Observer o);// 删除观察者
    public void notifyObservers();// 当主题发生变化时通知观察者
}

class EnvironmentData implements Subject {// 1
    private ArrayList obervers;
    private float temperature, humidity, cleanness;
    public EnvironmentData() {obersers = new ArrayList();}
    public void registerObserver(Observer o) {
        // 代码省略
    };

    public void notifyObservers() {
        for(int i = 0; i < observers.size(); i++) {
            Observer observer = (Observer) obervers.get(i);
            // 2
            observer.update(temperature, humidity, cleanness);
        }
    }

    public void measurementsChanged() {
        // 3
        notifyObservers();
    }

    public void setMeasurements(float temperature, float humidity, float cleanness) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.cleanness = cleanness;
        // 4
        measurementsChanged();
    }
}

class CurrentConditionsDisplay implements Observer {// 5
    private float temperature;
    private float humidity;
    private float cleanness;
    private Subject envData;
    // 6
    // envData.registerObserver(this);

    public void update(float temperature, float humidity, float cleanness) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.cleanness = cleanness;
        display();
    }

    public void display() {
        // 代码省略
    }
}

class EnvironmentMonitor {
    public static void main(String[] args) {
        EnvironmentData envData = new EnvironmentData();
        CurrentConditionsDisplay currentDisplay = new CurrentConditionsDisplay(envData);
        // envData.setMeasurements(80, 65, 30, 4f);
        envData.setMeasurements(80, 65, 30);
    }
}