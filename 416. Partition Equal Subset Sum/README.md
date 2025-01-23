# [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

We will approach this problem by using dynamic programming. We will create an 1D array with size `sum / 2` where `sum` is the sum of all the elements in the array. We will initialize the array with `0`. We will iterate over the numbers and for each number, we will iterate over the `dp` array in reverse order and update the value of `dp[j]` if `dp[j - num]` is `true`. Finally, we will return `dp[sum / 2]`.

Iterating over the `dp` array in reverse order is important because if we iterate in the forward order, we will update the value of `dp[j]` multiple times which will give us the wrong answer.

Let's take an example to understand this approach. Suppose we have an array `[1, 5, 11, 5]`. The sum of all the elements in the array is `22`. We will create an array of size `11` and initialize it with `0`.

```plaintext
dp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

We will iterate over the numbers and for each number, we will iterate over the `dp` array in reverse order and update the value of `dp[j]` if `dp[j - num]` is `true`.

For the first number `1`, we will update the `dp` array as follows:

```plaintext
dp = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

For the second number `5`, we will update the `dp` array as follows:

```plaintext
dp = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
```

For the third number `11`, we will update the `dp` array as follows:

```plaintext
dp = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
```

For the fourth number `5`, we will update the `dp` array as follows:

```plaintext
dp = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
```

Finally, we will return `dp[sum / 2]` which is `1`.

## Complexity Analysis
**Time complexity:** O(n * m) where `n` is the number of elements in the array and `m` is the sum of all the elements in the array.
**Space complexity:** O(m) where `m` is the sum of all the elements in the array.