# 概览
## 定义
广度优先算法（Breadth-First-Search），简称BFS，是一种图形搜索演算法。简单的说，BFS是从根节点开始，沿着树的宽度遍历树的节点，如果发现目标，则演算终止。
```jsx | inline
import React from 'react';

export default () => (
  <>
    <img
      src="/images/algorithm/BFS/BFS.png"
      height="350"
    />
  </>
);
```

## 核心代码
```js
/**
 * 广度优先搜索
 * @param Vs 起点
 * @param Vd 终点
 */
function BFS(Vs, Vd) {
  const queue = [Vs]; // 声明队列
  visit(Vs) = true; // 标记被访问过的项
  while (queue.length) {
    const node = queue.shift(); // 取出队列中第一项

    // 到达终点
    if (node === Vd) {
      return true;
    }
    const nextNode = compute(node); // nextNode是通过node的某种运算可以访问到
    if (isValid(nextNode) && !visit(nextNode)) {
      queue.push(nextNode); // 将nextNode纳入队列中
      visit(nextNode) = true;
    }
  }
  return false
}
```

## 相关算法题
- [从上到下打印二叉树](/algorithm/bfs/从上到下打印二叉树)
- [二叉树的镜像](/algorithm/bfs/二叉树的镜像)