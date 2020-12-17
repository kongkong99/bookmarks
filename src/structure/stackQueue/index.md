# 栈和队列

```jsx | inline
import React from 'react';

export default () => (
  <>
    <img src="/images/structure/stackQueue/栈和队列.webp" height="350" />
  </>
);
```

## 二者特点

**栈：**后进先出(LIFO), 即后加入的元素会先删除  
**队列：**先进先出(FIFO), 即先加入的元素会先删除

## 代码实现

### 栈

```js
// 实现一个栈
class Stack {
  constructor() {
    this.items = [];
  }

  // 添加元素
  push(element) {
    this.items.push(element);
  }

  // 删除元素
  pop() {
    return this.items.pop();
  }

  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈中元素个数
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }

  // 打印栈中元素
  print() {
    console.log(this.items.toString());
  }

  // 格式化toString方式
  toString() {
    return this.items.toString();
  }
}
```

### 队列

```js
// 实现一个队列
class Queue {
  constructor() {
    this.items = [];
  }

  // 添加元素
  enqueue(element) {
    this.items.push(element);
  }

  // 删除元素
  dequeue() {
    return this.items.shift();
  }

  // 返回队列第一个元素
  front() {
    return this.items[0];
  }

  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列中元素个数
  size() {
    return this.items.length;
  }

  // 清空队列
  clear() {
    this.items = [];
  }

  // 打印队列中元素
  print() {
    console.log(this.items.toString());
  }

  // 格式化toString方式
  toString() {
    return this.items.toString();
  }
}
```
