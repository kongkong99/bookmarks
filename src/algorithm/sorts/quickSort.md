# 快速排序

## 思路

找一个基准值，小于它的放在左边，大于它的放在右边， 左右部分，循环此步骤， 递归出口是长度为 2

```jsx | inline
import React from 'react';

export default () => (
  <>
    <img src="/images/algorithm/sorts/快速排序.gif" width="700" />
  </>
);
```

## 代码

```js
function quickSort(arr) {
  const baseValue = arr[0];
  const left = arr.filter(item => item < baseValue);
  const right = arr.filter(item => item > baseValue);
  if (left.length > 1) {
    quickSort(left);
  }
  if (right.length > 1) {
    quickSort(right);
  }
  return [...left, baseValue, ...right];
}
```
