---
title: n个骰子的点数
---

## 题目描述
[leetcode题目链接](https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/solution/jian-zhi-offer-60-nge-tou-zi-de-dian-shu-by-kong-k/)

把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。  
你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

**示例**
```
输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]

1 <= n <= 11
```

**难度:** ⭐⭐

## 解题思路
- 变量定义: 中间状态概率存储数组dp, 当前骰子数n, 当前骰子值j, n个骰子和i, 其他骰子和i - j
- 状态转移方程: dp[n][i] = dp[n-1][i-j]
- 初始值: dp[1] = [0, 1, 1, 1, 1, 1, 1], 代表一个骰子，掷出1～6，的概率相同，计作1
- 最终概率 dp[i][j] / Math.pow(6, n)

## 代码实现
`时间空间复杂度： O(6n), O(6n)`

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
  const dp = []
  for (let i = 0; i <= n; i++) {
    dp[i] = []
  }
  dp[1] = [0, 1, 1, 1, 1, 1, 1]
  let cur = 2
  while (cur <= n) {
    for (let i = cur; i <= 6 * cur; i++) {
      for (let j = 1; j <= 6; j++) {
        if (dp[cur - 1][i - j]) {
          if (dp[cur][i]) {
            dp[cur][i] += dp[cur - 1][i - j];
          } else {
            dp[cur][i] = dp[cur - 1][i - j];
          }
        }
      }
    }
    cur++
  }

  const nums = Math.pow(6, n);
  return dp[n].slice(n).map(item => {
    return Number((item / nums).toFixed(5))
  })
};
```


