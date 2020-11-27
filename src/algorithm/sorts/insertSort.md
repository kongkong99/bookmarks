# 插入排序

## 思路
依次与数组前面的值进行比较，小则依次换位置，直到不小于前一个值。
```jsx | inline
import React from 'react';

export default () => (
  <>
    <img
      src="/images/algorithm/sorts/插入排序.gif"
      height="350"
    />
  </>
);
```

## 代码
```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (curValue < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = curValue;
      } else {
        break;
      }
    }
  }
  return arr;
}
```
