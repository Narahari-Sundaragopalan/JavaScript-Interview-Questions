// Implement a function to check if a linked list is a palindrome.

function checkPalindrome(list) {
  // Find the midpoint of the linked list
  let node = list.head;
  let midPoint = findMidPoint(list);
  // Compute reverse of linked list from midPoint to end
  let tail = reverseLinkedList(midPoint);
  // compare both lists
  while (tail) {
    if (tail.data !== node.data) {
      return false;
    }
    tail = tail.next;
    node = node.next;
  }

  return true;
}

function findMidPoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseList(node) {
  let next = null;
  let previous = null;
  while (node) {
    next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }

  return previous;
}
