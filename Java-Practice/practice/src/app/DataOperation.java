// Created by wxc on 2019/10/24

package app;

import java.util.Arrays;

public class DataOperation {
  // main
  public static void main(String[] args) {
    DataOperation dataOpera = new DataOperation();

    // 输出一个长度为8的随机数组成的数组
    int[] nums = dataOpera.getArray(8);
    System.out.println(Arrays.toString(nums));

    // 成绩排序并输出前三名
    int[] scores = {89, -23, 64, 91, 119, 52, 73};
    int[] outPutScore = dataOpera.scoreSort(scores);
    System.out.println(Arrays.toString(outPutScore));// [91, 89, 73]
  }

  public int[] getArray(int length) {
    int[] nums = new int[length];

    for(int i = 0; i < length; i++) {
      nums[i] = (int)(Math.random() * 100);
    }
    return nums;
  }

  public int[] scoreSort(int[] scores) {
    int index = 0;
    int[] datas = new int[3];
    Arrays.sort(scores);

    for(int i = scores.length - 1; i >= 0; i--) {
      if (index < 3) {
        if (scores[i] > 100 || scores[i] < 0) {
          continue;
        }
        datas[index] = scores[i];
        index++;
      }
    }
    return datas;
  }
}