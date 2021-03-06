# 学习笔记四

## 深度优先搜索、广度优先搜索的实现和特性

深度优先遍历

- 基于栈的逻辑实现，不管是使用系统栈还是自己维护一个栈，都可以实现深度优先遍历

广度优先遍历

- 基于队列的逻辑实现

## 贪心算法的实现、特性

贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。

贪心法可以解决一些最优化问题，如：求图中的最小生成树、求哈夫曼编码等。然而对于工程和生活中的问题，贪心法一般不能得到我们所要求的答案。

一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最好办法。由于贪心法的高效性以及其所求得的答案比较接近最优结果，贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题。

- 贪心：当下左局部最优判断，不能回退
- 回溯：能够回退
- 动态规划：最优判断 + 回退

适用贪心算法的场景

简单地说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构。

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。

## 二分查找的实现、特性

二分查找的前提

1. 目标函数单调性（单调递增或者递减）
2. 存在上下界（bounded）
3. 能够通过索引访问（index accessible)

代码模板

```js
/* JavaScript */
let left = 0,
  right = array.length - 1;
while (left <= right) {
  let mid = (left + right) >> 1;
  if (array[mid] === target) {
    /*find the target*/ return;
  } else if (array[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```
