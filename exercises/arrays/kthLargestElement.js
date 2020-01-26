/**
 * Find the kth largest element in an unsorted array. 
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

// Solving with min heap -> Will build MinHeap in JavaScript first

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value) {
        this.heap.push(value);
        if (this.heap.length > 2) {
            let idx = this.heap.length - 1;  // Get the index of the last element of heap

            while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx / 2)]];
                    
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    }

    remove() {
        let smallest = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let i = 1;
            let left = 2 * i;
            let right = (2 * i) + 1;

            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right] || !this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = 2 * i;
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = (2 * i) + 1;
                }
                left = 2 * i;
                right = (2 * i) + 1;
                if (this.heap[left] == undefined && this.heap[right] == undefined) {
                    break;
                }
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }

        return smallest;
    }

    sort() {
        const result = [];

        while(this.heap.length > 1) {
            result.push(this.remove());
        }

        return result;
    }

    size() {
        return this.heap.length;
    }
}

const findKthLargest = (nums, k) => {
    const minHeap = new MinHeap();

    for (let num of nums) {
        minHeap.insert(num);

        if (minHeap.size() > k + 1) {
            minHeap.remove();
        }
    }

    return minHeap.remove();
}