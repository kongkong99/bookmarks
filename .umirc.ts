import { Children } from "react";

const formatMenus = (baseUrl, lists) => {
  return lists.map(item => `${baseUrl}${item}.md`)
}


export default {
  title: 'awesome-bookmarks',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  menus: {
    '/structure': [
      {
        title: '字符串',
        children: ['structure/string/index.md']
      },
      {
        title: '数组',
        children: ['structure/array/index.md']
      },
      {
        title: '栈和队列',
        children: ['structure/stackQueue/index.md']
      },
      {
        title: '链表',
        children: ['structure/linked/index.md']
      },
      {
        title: '二叉树',
        children: ['structure/tree/index.md']
      },
      {
        title: '堆',
        children: ['structure/heap/index.md']
      },
    ],
    '/algorithm': [
      {
        title: '排序专题',
        children: formatMenus(
          'algorithm/sorts/',
          ['index', 'insertSort', 'bubbleSort', 'selectSort', 'quickSort', 'mergeSort']
        )
      },
      {
        title: '递归算法',
        children: formatMenus(
          'algorithm/recursion/',
          ['index', '斐波那契数列', '青蛙跳台阶问题']
        )
      },
      {
        title: '广度优先搜索(BFS)',
        children: formatMenus(
          'algorithm/BFS/',
          ['index', '从上到下打印二叉树', '二叉树的镜像']
        )
      },
      {
        title: '深度优先搜索(DFS)',
        children: formatMenus(
          'algorithm/DFS/',
          ['index', '字符串全排列', '数组全排列', '电话号码的字母组合']
        )
      },
      {
        title: '双指针和三指针',
        children: formatMenus(
          'algorithm/pointers/',
          ['index', '二分法', '二维数组中的查找', '盛最多水的容器', '最接近的三数之和', '丑数']
        )
      },
    ]
  }
}
