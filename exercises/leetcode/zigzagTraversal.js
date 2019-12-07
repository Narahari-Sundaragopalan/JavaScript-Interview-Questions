/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
 */

const traverseZigzag = (node, level, output) => {
    if (!node) {
        return output;
    }

    if (output.length === level) {
        output.push([]);
    }

    if (level % 2 !== 0) {
        output[level].unshift(node.val);
    } else {
        output[level].push(node.val);
    }

    traverseZigzag(node.left, level + 1, output);
    traverseZigzag(node.right, level + 1, output);
}

const zigzagLevelOrder = root => {
    const output = [];

    traverseZigzag(root, 0, output);

    return output;
}