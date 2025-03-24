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

export default MaxHeap;