/*
Trees are data structures which are uni-directional
They cannot have loops of references.
Sample Tree Structure:

Tree {
    root: {
        value,
        children: [
            {
                value,
                children: [...]
            },
            {
                value,
                children: [...]
            }
        ]
    }
}

Functions for a Tree include "traverse" to loop through
the tree
add an element to the tree
*/

class Tree {
    constructor() {
        this.root = null;
    }

    // The traverse function will take a callback function
    // as argument and loop over the tree from the root
    // to its children
    traverse(callback) {
        function walk(node) {
            // Call the callback function on the current node
            callback(node);

            // loop over the node's children recursively
            node.children.forEach(walk);
        }

        // Start the traversal process
        walk(this.root);
    }

    // lets add an element to one of the node's children
    add(value, parentValue) {
        let newNode = {
            value,
            children: []
        };

        // if there is no root, set it to the newNode
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        // Else traverse through the tree and find the node, and add it to it's children
        this.traverse(node => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }
}
