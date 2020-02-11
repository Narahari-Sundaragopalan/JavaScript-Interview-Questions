/**
 * Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 * @param {LinkedList} list 
 * @return {boolean}
 */

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

/**
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

// Approach 2
const checkPalindrome = list => {
	if (!list.head) {
		return false;
	}

	const arrayList = [];
	let node = list.head;
	while (node) {
		arrayList.push(node.val);
		node = node.next;
	}

	let start = 0, end = arrayList.length - 1;

	while (start <= end) {
		if (arrayList[start] !== arrayList[end]) {
			return false;
		}
		start++;
		end--;
	}

	return true;
}

/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
