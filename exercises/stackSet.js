// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOf Stacks that mimics
// this. SetOf Stacks should be composed of several stacks and should create a
// new stack once the previous one exceeds capacity. SetOf Stacks. push() and
// SetOf Stacks. pop() should behave identically to a single stack (that is, popO
// should return the same values as it would if there were just a single stack).

// Implement a function popAt(int index) which performs a pop operation on
// a specific sub-stack.

class StackSet {
  constructor(capacity) {
    this.capacity = capacity;
    this.setStack = [];
  }

  push(record) {
    if (this.setStack.length === 0 || this.setStack[this.setStack.length - 1].length === this.capacity) {
      let newStack = [];
      newStack.push(record);
      this.setStack.push(newStack);
    } else {
      this.setStack[this.setStack.length - 1].push(record);
    }
  }

  pop() {
    if (this.setStack[this.setStack.length - 1].length === 0) {
      return this.setStack.pop();
    }

    return this.setStack[this.setStack.length - 1].pop();
  }

  peek() {
    let currStack = this.setStack[this.setStack.length - 1];
    return currStack[currStack.length - 1];
  }

  popAt(index) {
    return this.setStack[index].pop();
  }
}
