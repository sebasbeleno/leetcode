
var MedianFinder = function() {
    this.maxHeapForSmallNum = new MaxHeap();
    this.minHeapForLargeNum = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeapForSmallNum.size() === 0 || this.maxHeapForSmallNum.peek() >= num) {
      this.maxHeapForSmallNum.offer(num)
    } else {
      this.minHeapForLargeNum.offer(num)
    }

    if (this.maxHeapForSmallNum.size() > this.minHeapForLargeNum.size() + 1) {
      this.minHeapForLargeNum.offer(this.maxHeapForSmallNum.poll())
    } else if (this.minHeapForLargeNum.size() > this.maxHeapForSmallNum.size()) {
      this.maxHeapForSmallNum.offer(this.minHeapForLargeNum.poll())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minHeapForLargeNum.size() == this.maxHeapForSmallNum.size()) {
      return (this.minHeapForLargeNum.peek() + this.maxHeapForSmallNum.peek()) / 2
    } else {
      return this.maxHeapForSmallNum.peek()
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/**
 * IMPLEMENTATION OF MIN HEAP AND MAX HEAP
 * IGNORE THIS PART
 */
class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.compareVal = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.compareVal(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else break;
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else break;
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  size() {
    return this.data.length;
  }
}

class MaxHeap {
  constructor(data = []) {
    this.data = data; // Array to store heap elements
    this.heapify(); // Build the heap from the initial data
  }

  // Build the heap by percolating up all elements
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  // Returns the maximum element in the heap
  peek() {
    if (this.size() === 0) return null; // Return null if the heap is empty
    return this.data[0];
  }

  // Inserts a new value into the heap
  offer(value) {
    this.data.push(value); // Add the value to the end
    this.percolateUp(this.size() - 1); // Adjust the heap to maintain max-heap property
  }

  // Removes and returns the maximum element from the heap
  poll() {
    if (this.size() === 0) return null; // Return null if the heap is empty
    const max = this.data[0];
    const last = this.data.pop(); // Remove the last element
    if (this.size() !== 0) {
      this.data[0] = last; // Move the last element to the root
      this.percolateDown(0); // Adjust the heap to maintain max-heap property
    }
    return max;
  }

  // Moves an element up in the heap to restore the max-heap property
  percolateUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // Calculate parent index
      if (this.data[index] > this.data[parentIndex]) {
        this.swap(index, parentIndex); // Swap if child is greater than parent
        index = parentIndex; // Move up to the parent's position
      } else {
        break;
      }
    }
  }

  // Moves an element down in the heap to restore the max-heap property
  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftChildIndex = 2 * index + 1; // Left child index
      const rightChildIndex = 2 * index + 2; // Right child index
      let largestIndex = index;

      // Check if the left child is larger than the current largest
      if (
        leftChildIndex <= lastIndex &&
        this.data[leftChildIndex] > this.data[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }

      // Check if the right child is larger than the current largest
      if (
        rightChildIndex <= lastIndex &&
        this.data[rightChildIndex] > this.data[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }

      // If the largest element is not the parent, swap and continue
      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        index = largestIndex;
      } else {
        break;
      }
    }
  }

  // Swaps two elements in the heap
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  // Returns the size of the heap
  size() {
    return this.data.length;
  }
}