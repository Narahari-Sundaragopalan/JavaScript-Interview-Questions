// Write a program to sort a stack in ascending order (with biggest items on top).
// You may use at most one additional stack to hold items, but you may not copy
// the elements into any other data structure (such as an array)

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

function sortStack(stack) {
  const sortedStack = new Stack();

  while (stack.peek()) {
    let temp = stack.pop();

    while (sortedStack.peek()) {
      if (sortedStack.peek() > temp) {
        stack.push(sortedStack.pop());
      }
    }

    sortedStack.push(temp);
  }

  return sortedStack;
}
