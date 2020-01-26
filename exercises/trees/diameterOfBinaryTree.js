class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let ans;

const maxDepth = node => {
    if (!node) {
        return 0;
    }

    let left = depth(node.left);
    let right = depth(node.right);

    ans = Math.max(ans, left + right + 1);

    return Math.max(left, right) + 1;
}
const diameterOfBinaryTree = root => {
    ans = 1;
    maxDepth(root);
    return ans - 1;
}