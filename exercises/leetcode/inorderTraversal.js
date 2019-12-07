/**
 * Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
 */
const traverse = (node, result) => {
    if (node !== null) {
        if (node.left !== null) {
            traverse(node.left, result);
        }
        result.push(node.val);
        if (node.right !== null) {
            traverse(node.right, result);
        }
    }
}
const inOrderTraversal = root => {
    const result = [];

    traverse(root, result);

    return result;
}

// Iterative solution
const inorderTraversal = root => {
    const result = [];
    const stack = [];
    let curr = root;
    
    while (curr !== null || stack.length()) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
}