# 冒泡排序

## 思路
两层循环，一个数和其后面的数进行比较，小的值，放在前面
```jsx | inline
import React from 'react';

export default () => (
  <>
    <img
      src="/images/algorithm/sorts/冒泡排序.gif"
      height="350"
    />
  </>
);
```

## 代码
```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
}
```
