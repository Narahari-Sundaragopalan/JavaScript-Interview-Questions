// --- Directions
// Implement classes Node and Linked Lists

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

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;

    // Can also use getAt method: return this.getAt(0)
  }

  getLast() {
    if(!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      if(!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }

    if(!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if(last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while(node) {
      if(counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    // No Nodes in the Linked List
    if(!this.head) {
      return;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    // If index is out of bounds
    if(!previous || previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // Get the node at the previous index, if null get the last node
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}
