// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// Class to create a Queue from a Stack
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

// Add method of queue using stack function
  add(record) {
    this.first.push(record);
  }

  remove() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}
