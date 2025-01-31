# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

We will use Union Find to solve this problem. We will create a Union Find object and then iterate from left-top to right-bottom. If we find a '1' cell
we will check to its right and bottom cell. If they are also '1' we will union them and change. After iterating all the cells we will return the number of islands.
