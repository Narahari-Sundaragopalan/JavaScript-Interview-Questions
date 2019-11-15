/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const removeNthFromEnd = (head, n) => {
    if (!head) {
        return null;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    while (n >= 0) {
        fast = fast.next;
        n--;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}