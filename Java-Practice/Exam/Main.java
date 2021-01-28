// Session: 2017.11
// bridge模式 Created by wxc on 2019/10/22

import java.util.*;

class Matrix {
    // 各种格式的文件最终都被转化为像素矩阵
    // 代码省略
}

abstract class Implementor {
    // 1
    public abstract void doPaint(Matrix m) ;// 显示像素矩阵 m
}

class WinImp extends Implementor {
    public void doPaint(Matrix m) {
        // 调用 windows 系统的绘制函数绘制像素矩阵
    }
}

class LinuxImp extends Implementor {
    public void doPaint(Matrix m) {
        // 调用 linux 系统的绘制函数绘制像素矩阵
    }
}

abstract class Image {
    public void setImp(Implementor imp) {this.imp = imp;}
    public abstract void parseFile(String fileName);
    protected Implementor imp;
}

class BMPImage extends Image {
    // 代码省略
}

class GIFImage extends Image {
    public void parseFile(String fileName) {
        // 解析BMP文件并获得一个像素矩阵对象 m
        // 2 显示像素矩阵 m
        imp.doPaint(m);
    }
}

class Main {
    public static void main(String[] args) {
        // 在 linux 操作系统上查看demo.gif图像文件
        Image image = new GIFImage();// 3
        Implementor imageImp = LinuxImp();// 4

        // 5
        image.setImp(imp);

        image.parseFile("demo.gif");
    }
}