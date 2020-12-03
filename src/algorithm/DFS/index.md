# 概览
## 定义
深度优先搜索算法`DFS`是一种用于遍历或搜索树或图的算法。这个算法会尽可能深的搜索树的分支。`DFS`基于`递归`思想来实现。

```jsx | inline
import React from 'react';

export default () => (
  <>
    <img
      src="/images/algorithm/DFS/DFS.png"
      height="350"
    />
  </>
);
```

## 核心代码
```js
function DFS(board, i, j) {
  if (满足成功条件) return true;
  if (失败条件，控制、边界等) return false;
  const temp = board[i][j];
  board[i][j] = true; // 设置被访问标识
  res = dfs(board, i + 1, j + 1) || dfs(board, i - 1, j - 1) // 递归关系式
  board[i][j] = temp; // 回退，重置源起点被访问标识
  return res;
}
```

## 本篇介绍算法题
- [字符串全排列](/algorithm/dfs/字符串全排列)
- [数组全排列](/algorithm/dfs/数组全排列)
- [电话号码的字母组合](/algorithm/dfs/电话号码的字母组合)



## 拓展算法题
- [把数字翻译成字符串（dfs）](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/jian-zhi-offer-46-ba-shu-zi-fan-yi-cheng-zi-fu-1-4/)
- [二叉树中和为某一值的路径 (dp + dfs）](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/solution/jian-zhi-offer-34-er-cha-shu-zhong-he-wei-mou-y-16/)
- [树的子结构 （dfs）](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/jian-zhi-offer-26-shu-de-zi-jie-gou-dfs-by-kong-ko/)