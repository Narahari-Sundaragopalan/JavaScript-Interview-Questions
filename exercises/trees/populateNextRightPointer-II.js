/**
 * Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
let prev, leftMost;

const processChild = childNode => {
	if (childNode !== null) {
		if (prev !== null) {
			// If a node exists at this level already, assign the childNode as next of prev
			prev.next = childNode;
		} else {
			// else this is the first node on this level
			leftMost = childNode;
		}
		prev = childNode;
	}
}
const connect = root => {
	if (root === null) {
		return root;
	}
	leftMost = root;

	while (leftMost !== null) {
		// No nodes before this at this level
		prev = null;
		// Node to keep track of the current level in Tree
		let curr = leftMost;
		// Now that we have saved the current node, reassign the leftMost to null
		leftMost = null;

		while (curr !== null) {
			processChild(curr.left);
			processChild(curr.right);
			curr = curr.next;
		}
	}
	return root;
}

/**
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */