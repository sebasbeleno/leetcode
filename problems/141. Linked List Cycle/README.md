#[141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

## Approach 1: Hash Set
We can use a hash set to store the nodes we have visited. If we encounter a node that is already in the set, then we have a cycle in the linked list. If we reach the end of the list, then there is no cycle.

However, this approach requires additional space to store the nodes we have visited. The time complexity of this approach is `O(n)`. The space complexity is also `O(n)`.

## Approach 2: Floyd's Cycle Detection Algorithm
We can use Floyd's cycle detection algorithm to detect a cycle in the linked list. We can use two pointers, a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a cycle in the linked list, the fast pointer will eventually catch up to the slow pointer. If there is no cycle, the fast pointer will reach the end of the list.

The time complexity of this approa  ch is `O(n)`. The space complexity is `O(1)`.