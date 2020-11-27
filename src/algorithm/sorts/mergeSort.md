# 归并排序

## 思路
归并排序是一种分而治之算法，利用递归，先分割为一个个单元，成对单元进行合并
```jsx | inline
import React from 'react';

export default () => (
  <>
    <img
      src="/images/algorithm/sorts/归并排序.gif"
      height="350"
    />
  </>
);
```

## 代码
```js
function merge(left, right) {
  let res = [];
  const len = left.length + right.length;
  for (let index = 0, i = 0, j = 0; index < len; index++) {
    if (left[i] <= right[j]) res.push(left[i++])
    if (left[i] > right[j]) res.push(right[j++])
    if (i === left.length) {
      res = [...res, ...right.slice(j)]
      break;
    }
    if (j === right.length) {
      res = [...res, ...left.slice(i)]
      break;
    }
  }
  return res;
}

// 归并排序
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);

  return merge(mergeSort(left), mergeSort(right))
}
```
