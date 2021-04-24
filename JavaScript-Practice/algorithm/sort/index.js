// 冒泡排序
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


// 选择排序
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


// 插入排序
function insertionSort(datas) {

}