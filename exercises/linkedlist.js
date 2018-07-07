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
    // Create a new node and make it the head node, by pointing its next to the current head node
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    // Loop over the list, and increment the counter to return the size of the list
    while(node) {
      node = node.next;
      counter++;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      // Loop over the list, and if the last node is reached, the next value will be null, so return the node
      if (!node.next) {
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

    // To remove the first node, reset the head node to next of the current head node
    this.head = this.head.next;
  }

  removeLast() {
    // If there are no nodes, return
    if (!this.head) {
      return;
    }

    // If there is only one node, set the head node to null and return
    if(!this.head.next) {
      this.head = null;
      return;
    }

    // Set the previous to head node and current node to the next of the head node
    let previous = this.head;
    let node = this.head.next;
    // Loop over all the nodes in the list
    while (node.next) {
      previous = node;
      node = node.next;
    }
    // At the end of the loop, end of the list is reached. Set the next of the previous node to null, to remove the last node
    previous.next = null;
  }

  insertLast(data) {
    // Reuse getLast function to get the last node
    const last = this.getLast();

    // If last node exists, create a new node after that
    if (last) {
      last.next = new Node(data);
    } else {
      // If there is no last node, then the list is empty so create a head node
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      // If the counter matches the index, this is the node requested, so return the node
      if (counter === index) {
        return node;
      }
      // Increment counter and node till the index is reached
      counter++;
      node = node.next;
    }
    // At this point, the node is not found in the list, so return null
    return null;
  }

  removeAt(index) {
    // If there are no nodes, simply return
    if (!this.head) {
      return;
    }

    if (index === 0) {
      // If the index is 0, point the head node to the next node of the head
      this.head = this.head.next;
    }

    // Use the getAt function to the get the node at previous index
    const previous = this.getAt(index - 1);
    // If the given index is out of bounds, either the previous node or the next node after previous could be null, then return
    if(!previous || !previous.next) {
      return;
    }
    // Point the next of previous to the next of previous' next node
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      // If there are no nodes, create a head node in the list
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      // If the index is zero, create a new node and make it's next node as the current head node
      this.head = new Node(data, this.head);
    }

    // Get the previous node from the given index
    // Or get the last node
    const previous = this.getAt(index - 1) || this.getLast();
    // Create a new node with its next value set to the previous node's next
    const node = new Node(data, previous.next);
    // Update the previous node's next to the newly created node
    previous.next = node;
  }

  forEach(fn) {
    // Emulate forEach functionality by iterating through each of the nodes in the LinkedList
    let node = this.head;
    let counter = 0;

    while (node) {
      // Call the function passed, with the current node and index value
      fn (node, counter);
      // Increment the node and counter
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    // Set the node to the head node
    let node = this.head;

    while (node) {
      // For each iteration on the list, yield the node
      // Yield will return each node to the function call each time, until the end of the list
      // Based on generator concept (See Babel Documentation)
      yield node;
      node = node.next;
    }
  }
}
