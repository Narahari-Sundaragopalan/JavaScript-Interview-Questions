/**
 * Given a reference of a node in a connected undirected graph, 
 * return a deep copy (clone) of the graph. 
 * Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const visited = new Map();
const cloneGraph = node => {
    if (node === null) {
        return node;
    }

    if (visited.has(node)) {
        return visited.get(node);
    }

    let cloneNode = new Node(node, []);
    visited.put(node, cloneNode);

    for (let neighbor of node.neighbors) {
        cloneNode.neighbors.push(cloneGraph(neighbor));
    }

    return cloneNode;
}

/**
 * Time Complexity: O(N) (As we process each node once)
 * Space Complexity: O(N) (Space taken by the map -> visited, and also the space taken up
 * by the height of the recursion stack O(H))
 */