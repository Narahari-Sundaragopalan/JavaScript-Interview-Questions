// Given a linked list, the task is to reverse the linked list.

function reverseLinkedList(list) {
  let node = list.head;
  let previous = null;
  let next = null;

  if (!list.head || !list.head.next) {
    return list.head;
  }

  while (node) {
    next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }

  return previous;
}
