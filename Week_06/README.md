# 学习笔记六

## 动态规划的实现及关键点

感触

1. 人肉递归低效、很累
2. 找到最近最简方法，将其拆解成可重复解决的问题
3. 数学归纳法思维（抵制人肉递归的诱惑）

本质：寻找重复性 —> 计算机指令集

1. Wiki 定义： https://en.wikipedia.org/wiki/Dynamic_programming
2. “Simplifying a complicated problem by breaking it down into simpler sub-problems” (in a recursive manner)
3. Divide & Conquer + Optimal substructure `分治 + 最优子结构动态规划`

关键点

- 动态规划 和 递归或者分治 没有根本上的区别（关键看有无最优的子结构）
- 共性：找到重复子问题
- 差异性：最优子结构、中途可以淘汰次优解

力扣题目：路径计算 - 解题思路

1. 最优子结构 opt[n] = best_of(opt[n-1], opt[n-2], ...)
2. 储存中间状态：opt[i]
3. 递推公式（美其名曰：状态转移方程或者 DP 方程）
4. Fib: opt[i] = opt[n-1] + opt[n-2]
5. 二维路径：opt[i,j] = opt[i+1][j] + opt[i][j+1] (且判断 a[i,j]是否空地）动态规划关键点
