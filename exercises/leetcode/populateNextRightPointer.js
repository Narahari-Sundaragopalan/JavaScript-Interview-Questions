/**
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
 * The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
 */

class Queue {
	constructor() {
		this.data = [];
	}
	add(val) {
		this.data.push(val);
	}
	remove() {
		return this.data.shift();
	}
	peek() {
		return this.data[0];
	}
	size() {
		this.data.length;
	}
}

const connect = root => {
	if (root === null) {
		return root;
	}

	// create a queue to push nodes from each level
	const queue = new Queue();

	queue.add(root);
	while (queue.size() > 0) {
		// we want to do BFS so we take the size of each level
		let size = queue.size();

		for (let i = 0; i < size; i++) {
			let node = queue.remove();

			if (i < size - 1) {
				node.next = queue.peek();
			}

			if (node.left !== null) {
				queue.add(node.left);
			}

			if (node.right !== null) {
				queue.add(node.right);
			}
		}
	}

	return root;
}