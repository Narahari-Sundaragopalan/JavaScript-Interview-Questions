/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The most significant digit comes first and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const s1 = [];
    let node1 = l1;

    while (node1) {
        s1.push(node1);
        node1 = node1.next;
    }

    const s2 = [];
    let node2 = l2;

    while (node2) {
        s2.push(node2);
        node2 = node2.next;
    }

    let carry = 0;
    let prev = null;
    let result = 0;

    while (s1.length > 0 || s2.length > 0) {
        let num1 = s1.length > 0 ? s1.pop().val : 0;
        let num2 = s2.length > 0 ? s2.pop().val : 0;

        result = num1 + num2 + carry;
        if (result > 9) {
            result = result - 10;
            carry = 1;
        } else {
            carry = 0;
        }

        let curr = new ListNode(result);
        curr.next = prev;
        prev = curr;
    }

    if (carry) {
        let curr = new ListNode(carry);
        curr.next = prev;
        prev = curr;
    }

    return prev;
}