# [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

We will use a stack to keep track of the indices of the parentheses in the string. We will also use a set to keep track of the indices of the parentheses that need to be removed. We will iterate through the string and add the indices of the opening parentheses to the stack. When we encounter a closing parenthesis, we will check if the stack is empty. If the stack is empty, we will add the index of the closing parenthesis to the set of indices to be removed. If the stack is not empty, we will pop the index of the opening parenthesis from the stack. After iterating through the string, we will add the indices of the remaining opening parentheses to the set of indices to be removed. Finally, we will construct the result string by iterating through the string and adding the characters that are not in the set of indices to be removed.

## Complexity Analysis
**Time Complexity:** `O(n)`
**Space Complexity:** `O(n)`
