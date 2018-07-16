// You have two numbers represented by a linked list, where each node contains a
// single digit. The digits are stored in reverse order, such that the Ts digit is at the
// head of the list. Write a function that adds the two numbers and returns the sum
// as a linked list.
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295.
// Output: 2 -> 1 -> 9.That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295.
// Output: 9 -> 1 -> 2.That is, 912.

// Assuming both lists are equal in length

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

function sumLinkedList(list1, list2) {
  let node1 = list1.head;
  let node2 = list2.head;
  let resultNode = null;
  let headNode = null;

  var sum;
  var ones;
  let tens = 0;

  while (node1 && node2) {
    sum = node1.data + node2.data;

    sum += tens;
    ones = sum % 10;

    if (!resultNode) {
      headNode = new Node(ones);
      resultNode = headNode;
    } else {
      resultNode.next = new Node(ones);
      resultNode = resultNode.next;
    }

    tens = Math.floor(sum / 10);
    node1 = node1.next;
    node2 = node2.next;
  }

  if (tens > 0) {
    resultNode.next = new Node(tens);
    resultNode = resultNode.next;
  }

  return headNode;
}
