// Session: 2014.11
// command模式 Created by wxc on 2019/10/25

class Light {
    public Light() {}
    public Light(String name) {
        // 代码省略
    }

    public void on() {// 开灯
        // 代码省略
    }

    public void off() {// 关灯
        // 代码省略
    }
}

interface Command {// 1
    public void execute();
}

class LightOnCommand implements Command {// 开灯命令
    Light light;
    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        // 2
        light.on();
    }
}

class LightOffCommand implements Command {// 关灯命令
    Light light;
    public LightOffCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        // 3
        light.off();
    }
}

class RemoteControl {// 遥控器
    Command[] onCommands = new Command[7];
    Command[] offCommands = new Command[7];
    public RemoteControl() {
        // 代码省略
    }

    public void setCommand(int slot, Command onCommand, Command offCommand) {
        // 4
        onCommands[slot] = onCommand;

        // 5
        offCommands[slot] = offCommand;
    }

    public void onButtonWasPushed(int slot) {
        // 6
        onCommands[slot].execute();
    }

    public void offButtonWasPushed(int slot) {
        // 7
        offCommands[slot].execute();
    }
}

class RemoteLoader {
    public static void main(String[] args) {
        RemoteControl remoteControl = new RemoteControl();
        Light livingRoomLight = new Light("Living Room");
        Light kitchenLight = new Ligth("kitchen");
        LightOnCommand livingRoomLightOn = new LightOnCommand(livingRoomLight);
        LightOffCommand livingRoomLightOff = new LightOffCommand(livingRoomLight);
        LightOnCommand kitchenLightOn = new LightOnCommand(kitchenLight);
        LightOffCommand kitchenLightOff = new LightOffCommand(kitchenLight);
        remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
        remoteControl.setCommand(1, kitchenLightOn, kitchenmLightOff);
        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.onButtonWasPushed(1);
        remoteControl.offButtonWasPushed(1);
    }
}