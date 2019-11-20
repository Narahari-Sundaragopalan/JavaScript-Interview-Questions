/**
 * Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
 */

const countCompleteTreeNodes = (root) => {
    return root !== null ? 1 + countCompleteTreeNodes(root.right) + countCompleteTreeNodes(root.left) : 0;
}