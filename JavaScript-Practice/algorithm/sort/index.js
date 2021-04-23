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
function SelectionSort(datas) {

}