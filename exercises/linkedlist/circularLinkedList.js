// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// OR
// Given a circular linked list, implement an algorithm which returns the node at
// the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points
// to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A - > B - > C - > D - > E - > C [the same C as earlier]
// Output: C

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) {
      return true;
    }

    return false;
  }
}

function circularList(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return slow;
    }
  }

  return 'Not a circular Linked List';
}
