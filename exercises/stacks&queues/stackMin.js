class Stack {
  constructor() {
    this.data = [];
    this.minStack = [];
  }

  push(record) {
    if (record <= this.min()) {
      this.minStack.push(record);
    }
    this.data.push(record);
  }

  pop() {
    let result = this.data.pop();
    if (result === this.currentMin) {
      this.minStack.pop();
    }
    return result;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}
