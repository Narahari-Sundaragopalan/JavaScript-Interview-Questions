/**
 * Given a list of unique integers nums, construct a BST from it 
 * (you need to insert nodes one-by-one with the given order to get the BST) and 
 * find the distance between two nodes node1 and node2. Distance is the number of edges 
 * between two nodes. If any of the given nodes does not appear in the BST, return -1.
 * 
 * Input: nums = [2, 1, 3], node1 = 1, node2 = 3
Output: 2
Explanation:
     2
   /   \
  1     3
 */

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function insert(root, data) {
    if (!root) {
        return new Node(data);
    }
    if (data < root.left && root.left) {
        insert(root.left, data);
    } else if (data < root.left) {
        root.left = new Node(data);
    } else if (data > root.right && root.right) {
        insert(root.right, data);
    } else if (data > root.right) {
        root.right = new Node(data);
    }

    return root;
}

const findMinDistanceBetweenNodes = (nums, node1, node2) => {
    const root = insert(null, nums[0]);

    for (let i = 1; i < nums.length; i++) {
        insert(root, nums[i]);
    }

    const swap = (a, b) => {
        let tmp = a;
        a = b;
        b = tmp;
    }

    if (node1 > node2) {
        swap(node1, node2);
    }

    const distanceFromRoot = (root, val) => {
        if (root.val === val) {
            return 0;
        } else if (root.val > val) {
            return 1 + distanceFromRoot(root.left, val);
        }
        return 1 + distanceFromRoot(root.right, val);
    }

    const distanceBetweenTwo = (root, node1, node2) => {
        if (!root) {
            return 0;
        }

        if (root.val > node1 && root.val > node2) {
            return distanceBetweenTwo(root.left, node1, node2);
        }

        if (root.val < node1 && root.val < node2) {
            return distanceBetweenTwo(root.right, node1, node2);
        }

        if (root.val >= node1 && root.val <= node2) {
            return distanceFromRoot(root.left, node1) +
                distanceFromRoot(root.right, node2);
        }
    }

    return distanceBetweenTwo(root, node1, node2);
}
