---
title: 包含 min 函数的栈
---

## 题目描述

[leetcode 题目链接](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/)

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

**示例**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();   --> 返回 0.
minStack.min();   --> 返回 -2.
```

**难度:** ⭐

### 代码实现

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.items = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.items.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return Math.min(...this.items);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```
