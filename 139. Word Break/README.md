# [139. Word Break](https://leetcode.com/problems/word-break/)

We will solve this problem using dynamic programming. We will create a boolean array `dp` of size `n+1` where `n` is the length of the input string. `dp[i]` will be true if the substring of the input string from index 0 to `i-1` can be broken into words from the dictionary. We will initialize `dp[0]` to be true because an empty string can be broken into words from the dictionary.

We will iterate over the input string from index 1 to `n` and for each index `i`, we will iterate over the input string from index 0 to `i-1`. For each index `j`, we will check if `dp[j]` is true and the substring from index `j` to `i-1` is present in the dictionary. If both conditions are true, we will set `dp[i]` to be true.

Finally, we will return `dp[n]` which will be true if the input string can be broken into words from the dictionary.

## Complexity Analysis
- **Time Complexity:** $O(n^2)$ where `n` is the length of the input string.
- **Space Complexity:** $O(n)$ where `n` is the length of the input string.