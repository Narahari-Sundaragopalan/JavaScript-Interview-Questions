// Implement an algorithm to delete a node in the middle of a singly linked list,
// given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a- >b- >d->e


// Writing Structure for LinkedList and Node for learning purpose
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

function deleteMiddleNode(node) {
  while (node && node.next) {
    node.value = node.next.value

    if (!node.next.next) {
      node.next = null;
    }
    node = node.next;
  }
}
