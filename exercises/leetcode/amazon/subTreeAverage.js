/**
 * Given a M-ary tree, find the subtree with maximum average. Return the root of the subtree.
 * A subtree of a tree is any node of that tree plus all its descendants. 
 * The average value of a subtree is the sum of its values, divided by the number of nodes.
 */


class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

const subTreeAverage = root => {
    const count = node => {
        let sum = 0;
        let number = 0;

        if (!node) {
            return [sum, number]
        }

        sum += node.val;
        number++;

        const childCount = [];
        for (let child of node.children) {
            childCount = count(child);
            sum += childCount[0];
            number += childCount[1];
        }

        return [sum, number];
    }

    const rootCount = count(root);
    let currentMaxAvg = Math.floor(rootCount[0] / rootCount[1]);
    let node = root;

    for (let child of root.children) {
        let childOfMaxAvg = subTreeAverage(child);
        let childCount = count(childOfMaxAvg);

        if (Math.floor(childCount[0] / childCount[1]) > currentMaxAvg) {
            currentMaxAvg = Math.floor(childCount[0] / childCount[1]);
            node = childOfMaxAvg;
        }
    }

    return node;
}