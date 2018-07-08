// Given a singly linked list, Your task is to remove every Kth node.
// The task is to complete a method deleteK that takes two argument,
// head of linked list and an integer k.
// The method returns the head of the new linked list


function removeKthElement(list, k) {
  let node = list.head;
  let previous = list.head;
  let counter = 0;

  if (!list.head) {
    return;
  }

  // Loop over the list and increment the counter
  while (node) {
    counter++;

    // if counter equals k, then remove the element and reset the counter
    if (k === counter) {
      previous.next = node.next;
      counter = 0;
    }

    if (counter !== 0) {
      previous = node;
    }
    node = node.next;
  }

  return list.head
}
