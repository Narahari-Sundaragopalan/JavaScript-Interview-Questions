/**
 * Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let maxSum;

const maxGain = node => {
    if (!node) {
        return Number.NEGATIVE_INFINITY;
    }

    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);

    let newPathMax = node.val + leftGain + rightGain;

    maxSum = Math.max(maxSum, newPathMax);

    return node.val + Math.max(leftGain, rightGain);
}
const maxPathSum = root => {
    maxSum = Number.NEGATIVE_INFINITY;

    maxGain(root);

    return maxSum;
}
