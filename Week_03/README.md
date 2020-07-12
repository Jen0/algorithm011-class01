# 学习笔记三

## 递归的实现、特性以及思维要点

树的面试题解法一般都是递归？

1. 树、节点的定义就是用递归的方式来进行的；
2. 各种树都有重复性（自相似性）

递归模板

```js
function recursion() {
  // recursion terminator
  // process logic in current level
  // drill down
  // reverse the current level status if needed
}
```

递归注意要点

1. 不要人肉进行递归
2. 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）
3. 数学归纳法思维

## 分治、回溯的实现和特性

### 1. 分治

特殊的递归或者是复杂的递归

分治的思想就是将一个问题拆解成多个子问题，`最终将子问题的结构进行合并`。

分治模板

```js
function divideConquer() {
  // recursion terminator
  // prepare data
  // conquer subProblems
  // process and generate the final result
  // revert the current level states
}
```

### 2. 回溯

回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。

回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种情况：

- 找到一个可能存在的正确的答案；
- 在尝试了所有可能的分步方法后宣告该问题没有答案。 在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。

回溯思想：不断地下探，每一层都去试，`最终把结果返回上一层`。
