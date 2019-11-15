/**
 * You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

const insert = (root, val) => {
    let thisCount = 0;

    while (true) {
        if (val <= root.val) {
            root.count++;

            if (!root.left) {
                root.left = new TreeNode(val);
                break;
            } else {
                root = root.left;
            }
        } else {
            thisCount += root.count;

            if (!root.right) {
                root.right = new TreeNode(val);
                break;
            } else {
                root = root.right;
            }
        }
    }

    return thisCount;
}

const countSmaller = nums => {
    if (!nums || nums.length === 0) {
        return [];
    }

    const result = [];
    let root = new TreeNode(nums[nums.length - 1]);

    for (let i = nums.length - 2; i >= 0; i--) {
        let count = insertAndReturnCount(root, nums[i]);
        result.push(count);
    }

    return result.reverse();
}