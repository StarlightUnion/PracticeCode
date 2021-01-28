package app;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello Java");

        // 创建名为average的对象
        App app = new App();
        double avg = app.calcAvg();
        System.out.println("平均值为：" + avg);

        int maxScore = app.getMaxAge();
        System.out.println("最大值为：" + maxScore);
    }

    // 定义一个返回值为double类型的方法
    public double calcAvg() {
        double java = 92.5;
        double php = 83.0;
        double avg = (java + php) / 2;// 计算平均值

        return avg;
    }

    public int getMaxAge() {
        int[] ages = {18, 23, 21, 19, 25, 29, 17};
        int max = ages[0];

        for (int i = 0; i <= ages.length - 1; i++) {
            max = ages[i] >= max ? ages[i] : max;
        }

        return max;
    }
}