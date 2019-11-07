/**
 * Given two non-empty binary trees s and t, check whether tree t has 
 * exactly the same structure and node values with a subtree of s. 
 * A subtree of s is a tree consists of a node in s and all of this node's descendants. 
 * The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
 Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const isSubtree = (s, t) => {
    const isIdentical = (t1, t2) => {
        if (!t1 && !t2) {
            return false;
        }

        if (t1 && t2) {
            return (t1.val === t2.val &&
                isIdentical(t1.left, t2.left) &&
                isIdentical(t1.right, t2.right));
        }

        return false;
    }

    if (!s) {
        return false;
    }

    if (!t) {
        return true;
    }

    if (isIdentical(s, t)) {
        return true;
    }

    return (isSubtree(s.left, t) || isSubtree(s.right, t));
}