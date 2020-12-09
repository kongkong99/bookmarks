---
title: 和为s的连续正数序列
---

## 题目描述
[leetcode题目链接](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/jian-zhi-offer-57-ii-he-wei-sde-lian-xu-zheng-s-16/)

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。  
序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。


**示例**
```
输入：target = 9
输出：[[2,3,4],[4,5]]

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

1 <= target <= 10^5
```
**难度:** ⭐

## 解题思路
- 窗口中所有值的和: addValue, 目标值target
- 数学方法 + 滑动窗口. 
- 数学公示：addValue = (right * (right + 1) / 2) - (left * (left - 1) / 2)
- 如果addValue>target，则left++, 如果addValue < target, 则right++;


## 代码实现
`时间空间复杂度： O(n), O(1)`

```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let left = 1;
  let right = 2;
  const res = [];
  let midRes = [1]
  while (true) {
    if (right >= target) break
    let addValue = right * (right + 1) / 2 - left * (left - 1) / 2;
    if (addValue < target) {
      right++
    } else if (addValue > target) {
      left++
    } else {
      midRes = midRes.slice(left - midRes[0]);
      for (let i = midRes[midRes.length - 1] + 1 || left; i <= right; i++) {
        midRes.push(i)
      }
      res.push(midRes)
      right++
      left++
    }
  }
  return res;
};
```

