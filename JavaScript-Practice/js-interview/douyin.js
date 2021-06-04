/*
 * @Description: douyin.js
 * @Author: tourist17846
 * @Date: 2021-06-01 10:51:50
 * @LastEditTime: 2021-06-03 17:01:44
 */

// 来自：2 年前端, 如何跟抖音面试官 battle
// https://mp.weixin.qq.com/s/tcZJtaeacz4WDw0z2SWOIA

// 有一个混杂的整数序列，现在任务是对它们重新排序，以使其符合上述序列并输出结果
// * 假设我们取一个数字 X 并执行以下任一操作：
// * a: 将 X 除以 3 （如果可以被3除）
// * b: 将 X 乘以 2
// * 每次操作后，记下结果。如果从 9 开始，可以得到一个序列

// 示例
// 输入：[4, 8, 6, 3, 12, 9]
// 输出：[9, 3, 6, 12, 4, 8]
// 解释：[9, 3, 6, 12, 4, 8] => 9/3=3 -> 3*2=6 -> 6*2=12 -> 12/3=4 -> 4*2=8

// 输入：[3000, 9000]
// 输出：[9000, 3000]

// 输入：[4, 2]
// 输出：[2, 4]

// 输入：[4, 6, 2]
// 输出：[6, 2, 4]


function changeArr(arr) {
  const map = new Map();

  let find = false, ret;

  arr.forEach(n => {
    map.set(n, (map.get(n) || 0) + 1);
  });

  arr.forEach(n => {
    if (find) return;
    dfs(n, 2, [n]);
  });

  function dfs(prev, index, res) {
    if (find) return;
    if (index === arr.length + 1) {
      find = true;
      ret = res;
    }

    if (map.has(prev * 2) && map.get(prev * 2) > 0) {
      map.set(prev * 2, map.get(prev * 2) - 1);
      dfs(prev * 2, index + 1, [...res, prev * 2]);
      map.set(prev * 2, map.get(prev * 2) + 1);
    }

    if (!(prev % 3) && map.get(prev / 3) > 0) {
      map.set(prev / 3, map.get(prev / 3) - 1);
      dfs(prev / 3, index + 1, [...res, prev / 3]);
      map.set(prev / 3, map.get(prev / 3) + 1);
    }
  }

  return ret;
}