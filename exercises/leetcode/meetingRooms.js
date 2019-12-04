/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
 * find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
 */
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

    peek() {
        return this.heap[1];
    }
}

const minMeetingRooms = intervals => {
    intervals = intervals.sort(([a,b], [c,d]) => a - c);

    let minHeap = new MinHeap();

    minHeap.insert(intervals[0][1]); // adding end time to minHeap

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= minHeap.peek()) {
            minHeap.remove();
        }

        // we need to add the end time of interval in both cases
        // 1. when we add a new meeting 
        // 2. or update an existing meeting with new end time
        minHeap.insert(intervals[i][1]);
    }

    return minHeap.size() - 1;
}