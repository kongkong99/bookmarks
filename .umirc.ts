import { Children } from "react";

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
    ]
  }
}
