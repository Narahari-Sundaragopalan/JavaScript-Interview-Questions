// Write code to partition a linked list around a value x, such that all nodes less than
// x come before all nodes greater than or equal to x.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

function partition(list, x) {
  let left = null;
  let currLeft = null;
  let right = null;
  let currRight = null;

  let node = list.head;

  while (node) {
    if (node.data < x) {
      if (!left) {
        left = node;
        currLeft = left;
      } else {
        currLeft.next = node;
        currLeft = currLeft.next;
      }
    } else if (node.data > x) {
      if (!right) {
        right = node;
        currRight = right;
      } else {
        currRight.next = node;
        currRight = currRight.next;
      }
    }
    node = node.next;
  }

  currRight.next = null;
  currLeft.next = right;

  return left;
}
