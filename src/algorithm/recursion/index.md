# 概览
## 定义
在运行的过程中调用自己。递归是一种思想，很多算法都是基于递归，比如DFS等。

## 递归的三个条件
- 子问题实现相同的功能
- 结束条件：空值、边界等
- 递归关系式：满足某个条件，递归前进，不满足，递归返回

## 记忆化
递归会包含大量的重复计算，会消耗额外的空间来存储值，递归层次较深时，可能会导致JS进程直接崩溃，故可以采用一种`记忆化算法`（下方青蛙跳台阶问题中有示例代码）

```jsx | inline
import React from 'react';

export default () => (
  <>
    <img
      src="/images/algorithm/recursion/递归.jpg"
      height="330"
    />
  </>
);
```

## 相关算法题
- [斐波那契数列⭐](/algorithm/recursion/斐波那契数列)
- [青蛙跳台阶问题⭐](/algorithm/recursion/青蛙跳台阶问题)