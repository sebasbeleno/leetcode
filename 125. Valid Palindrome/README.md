# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

The aproach for this problem is to use two pointers, one at the start of the string and the other at the end of the string. We will move the pointers towards each other and compare the characters at each pointer.

To remove the non-alphanumeric characters, we will use an regular expression to match only the alphanumeric characters.