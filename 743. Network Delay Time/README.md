# [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)

To solve this problem, we can a Map and a PriorityQueue. The Map is used to store the graph, and the PriorityQueue is used to store the node that we are going to visit. We will start from the source node, and we will visit all the nodes that are connected to the source node. We will keep track of the time that we have taken to reach the destination node. If we have visited all the nodes, then we will return the time that we have taken to reach the destination node. If we have not visited all the nodes, then we will return -1.

## Complexity Analysis
**Time Complexity:** `O(NlogN)`, where `N` is the number of nodes in the graph.
**Space Complexity:** `O(N)`, where `N` is the number of nodes in the graph.
