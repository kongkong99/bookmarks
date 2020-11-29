# 选择排序

## 思路

两层循环，每次找小的依次放到前面的位置， 前面位置的值放到此次循环锁定小值的位置。

```jsx | inline
import React from 'react';

export default () => (
  <>
    <img src="/images/algorithm/sorts/选择排序.gif" width="700" />
  </>
);
```

## 代码

```js
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let idx = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        idx = j;
        min = arr[j];
      }
    }
    if (idx !== -1) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return arr;
}
```
