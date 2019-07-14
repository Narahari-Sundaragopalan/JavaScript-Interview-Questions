/*
In a binary search tree, each node on the left is smaller than 
the parent node, and each node on the right is greater than the
parent node.
*/

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Check if a value exists in the tree
    contains(value) {
        let current = this.root;

        while(current) {
            if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            } else {
                return true;
            }
        }
        return false;
    }

    add(value) {
        let newNode = {
            value,
            left: null,
            right: null
        };

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true) {
            if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }

                current = current.right;
            } else if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }

                current = current.left;
            } else {
                // Log and do nothing in the tree
                console.log("Number is same as root")
                break;
            }
        }
    }
}