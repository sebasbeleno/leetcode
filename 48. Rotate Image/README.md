# [48. Rotate Image](https://leetcode.com/problems/rotate-image/)

We will iterate through the matrix layer by layer, where the first layer is the outermost layer and the last layer is the innermost layer. We will rotate the elements of each layer in a cyclic manner. The first element of the layer will be stored in a temporary variable and will be replaced by the last element of the layer. The last element of the layer will be replaced by the second last element of the layer and so on. The second last element of the layer will be replaced by the third last element of the layer and so on. The third last element of the layer will be replaced by the fourth last element of the layer and so on. The fourth last element of the layer will be replaced by the temporary variable. We will repeat this process for all the layers.

## Complexity Analysis
**Time Complexity:** `O(N^2)`, where `N` is the number of elements in the matrix.
**Space Complexity:** `O(1)`