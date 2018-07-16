// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  // Add a record to the Queue
  add(record) {
    this.data.unshift(record);
  }

  // Remove a record from the Queue
  remove() {
    return this.data.pop();
  }

  // Return the last element in the queue without popping
  peek() {
    return this.data[this.data.length - 1];
  }
}
