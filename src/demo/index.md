---
title: 斐波那契数列
---

## 题目描述
[leetcode题目链接](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：
```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

**示例**
```
输入：n = 2
输出：1

输入：n = 5
输出：5

0 <= n <= 100
```
**难度:** ⭐

## 解题思路
- 当n=0或n=1时，直接返回n  
- 当n>=2时，根据题目关系式F(N) = F(N - 1) + F(N - 2)，进行递归。

## 代码实现
`时间空间复杂度： O(logn), O(1) `

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if ([0, 1].includes(n)) return n; // 结束条件
  return fib(n - 1) + fib(n - 2); //递归关系式，子问题实现相同的功能
};
```

