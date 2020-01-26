/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list. */
 function ListNode(val) {
    this.val = val;
    this.next = null;
 }


const mergeKLists = lists => {
    let head = new ListNode();
    let point = head;
    let nodes = [];

    for (let l of lists) {
        while (l) {
            nodes.push(l.val);
            l = l.next;
        }
    }
    nodes.sort((a, b) => a - b);
    for (let n of nodes) {
        point.next = new ListNode(n);
        point = point.next;
    }

    return head.next;
}

// Time Complexity: O (NlogN) => O(N) for looping list and creating array
// O(NlogN) for sorting
// O(N) for creating new list
// Space Complexity: O(N)