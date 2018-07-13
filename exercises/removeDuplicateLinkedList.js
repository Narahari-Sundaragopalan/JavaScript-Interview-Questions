Write code to remove duplicates from an unsorted linked list.

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

function removeDuplicates(head) {
  let node = head;
  while (node) {
    if (node.next && checkDuplicates(head, node.next)) {
      node.next = node.next.next;
    }
    node = node.next;
  }

  return head;
}

function checkDuplicates(head, node) {
  let currentNode = head;
  while (currentNode !== node) {
    if (currentNode.data === node.data) {
      return true;
    }
    currentNode = currentNode.next;
  }

  return false;
}
