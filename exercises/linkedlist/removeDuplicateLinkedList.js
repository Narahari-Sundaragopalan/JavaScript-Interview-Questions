// Write code to remove duplicates from an unsorted linked list.

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
  while (node && node.next) {
    if (node.next.data === node.data) {
      	node.next = node.next.next;
    } else {
		node = node.next;
	}
  }

  return head;
}
