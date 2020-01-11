/**
 * A linked list is given such that each node contains an additional random pointer 
 * which could point to any node in the list or null.
 * 
 * Return a deep copy of the list.
 * 
 * Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

const copyRandomList = head => {
    if (!head) {
        return null;
    }

    let oldNode = head;
    let newNode = new Node(head.val, head.next, head.random);
    let visited = new Map();

    visited.set(oldNode, newNode);

    const getNode = node => {
        if (!node) {
            return null;
        }

        if (visited.has(node)) {
            return visited.get(node);
        }

        visited.set(node, new Node(node.val, node.next, node.random));
        return visited.get(node);
    }

    while (oldNode) {
        newNode.random = getNode(oldNode.random);
        newNode.next = getNode(oldNode.next);
        oldNode = oldNode.next;
        newNode = newNode.next;
    }

    return visited.get(head);
}