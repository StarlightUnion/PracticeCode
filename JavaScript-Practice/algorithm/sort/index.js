// 基本排序算法
// 1.冒泡排序
// 时间复杂度：O(n^2) 空间复杂度：O(1)
function bubbleSort(datas) {
  let temp = 0;

  for (let i = datas.length; i > 0; i--) {
    for (let j = 0; j < datas.length; j++) {
      if (datas[j] > datas[j + 1]) {
        temp = datas[j];
        datas[j] = datas[j + 1];
        datas[j + 1] = temp;
      }
    }
  }

  return datas;
}


// 2.选择排序
function selectionSort(datas) {
  for (let i = 0; i < datas.length; i++) {
    let temp,
      min = datas[i],
      index = i;
    for (let j = i + 1; j < datas.length; j++) {
      if (datas[j] < min) {
        min = datas[j];
        index = j;
      }
    }

    temp = datas[i];
    datas[i] = datas[index];
    datas[index] = temp;
  }

  return datas;
}


// 3.插入排序
function insertionSort(datas) {
  for (let i = 0; i < datas.length; i++) {
    let temp = datas[i];
    let key = i - 1;

    while (key >= 0 && datas[key] > temp) {
      datas[key + 1] = datas[key];
      key--;
    }

    datas[key + 1] = temp;
  }

  return datas;
}


// 高级排序算法
// 4.希尔排序
function shellSort(datas) {
  let increment = datas.length;
  let i, temp; //暂存

  do {
    //设置增量
    increment = Math.floor(increment / 3) + 1;
    for (i = increment; i < datas.length; i++) {
      if (datas[i] < datas[i - increment]) {
        temp = datas[i];

        let j;
        for (j = i - increment; j >= 0 && temp < datas[j]; j -= increment) {
          datas[j + increment] = datas[j];
        }
        datas[j + increment] = temp;
      }
    }
  }
  while (increment > 1)

  return datas;
}