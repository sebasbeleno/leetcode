/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(list1, list2, k) {
    let listLen = list1.length;
   let minHeapForPais = new MinHeap();
   let pairs = []

   for (let i = 0; i < Math.min(listLen, k); i++) {
       minHeapForPais.offer([list1[i] + list2[0], i, 0])
   }

   let counter = 1

   while(minHeapForPais.size() > 0 && counter <= k) {
       let [sumOfPairs, i, j] = minHeapForPais.poll()
       pairs.push([list1[i], list2[j]])
       let nextElement = j + 1

       // if next element is on left2, add it
       if (list2.length > nextElement) {
           minHeapForPais.offer([list1[i] + list2[nextElement], i, nextElement])
       }

       counter++
   }

   return pairs
};

/**
 * IMPLEMENTATION OF MIN HEAP
 * IGNORE THIS PART
 */
class MinHeap {
   constructor(data = new Array()) {
       this.data = data;
       this.compareVal = (a, b) => a - b;
       this.heapify();
   }

   heapify() {
       if (this.size() < 2) {
           return;
       }
       for (let i = 1; i < this.size(); i++) {
           this.percolateUp(i);
       }
   }

   peek() {
       if (this.size() === 0) {
           return null;
       }
       return this.data[0];
   }

   offer(value) {
       this.data.push(value);
       this.percolateUp(this.size() - 1);
   }

   poll() {
       if (this.size() === 0) {
           return null;
       }
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
           if (
               this.compareVal(
                   this.data[index][0],
                   this.data[parentIndex][0]
               ) < 0
           ) {
               this.swap(index, parentIndex);
               index = parentIndex;
           } else {
               break;
           }
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
               this.compareVal(
                   this.data[leftIndex][0],
                   this.data[findIndex][0]
               ) < 0
           ) {
               findIndex = leftIndex;
           }

           if (
               rightIndex <= lastIndex &&
               this.compareVal(
                   this.data[rightIndex][0],
                   this.data[findIndex][0]
               ) < 0
           ) {
               findIndex = rightIndex;
           }

           if (index !== findIndex) {
               this.swap(index, findIndex);
               index = findIndex;
           } else {
               break;
           }
       }
   }

   swap(index1, index2) {
       [this.data[index1], this.data[index2]] = [
           this.data[index2],
           this.data[index1],
       ];
   }

   size() {
       return this.data.length;
   }
}
