/**
 * There's an undirected connected graph with n nodes labeled 1..n. 
 * But some of the edges has been broken disconnecting the graph. 
 * Find the minimum cost to repair the edges so that all the nodes are once again 
 * accessible from each other.

Input:

n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes connected by an edge.
edgesToRepair, a list where each element is a triplet representing the pair of nodes 
between which an edge is currently broken and the cost of repearing that edge, 
respectively (e.g. [1, 2, 12] means to repear an edge between nodes 1 and 2, the cost would be 12).
Example 1:

Input: n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
Output: 20
Explanation:
There are 3 connected components due to broken edges: [1], [2, 3] and [4, 5].
We can connect these components into a single component by repearing the edges 
between nodes 1 and 2, and nodes 1 and 5 at a minimum cost 12 + 8 = 20
 */

const minCost = (N, edges, edgesToRepair) => {
    let n = N;

    const parents = [];

    for (let i = 0; i < N; i++) {
        parents.push(i);
    }

    const find = u => {
        if (u !== parents[u]) {
            parents[u] = find(parents[u]);
        }

        return parents[u];
    }

    const union = (u, v) => {
        let p1 = find(u);
        let p2 = find(v);

        if (p1 !== p2) {
            parents[p1] = p2;
            n--;
        }
    }

    const isSameEdge = (edge1, edge2) => {
        const [u1, v1] = edge1;
        const [u2, v2] = edge2;

        return u1 === u2 && v1 === v2;
    }

    const isInEdgesRepair = edge => {
        for (let e of edgesToRepair) {
            if (isSameEdge(edge, e)) {
                return true;
            }
        }

        return false;
    }

    for (let [u, v] of edges) {
        if (!isInEdgesRepair) {
            union(u, v);
        }
    }
    
    edgesToRepair.sort((a, b) => a[2] = b[2]);

    let res = 0;
    for (const [u, v, cost] of edgesToRepair) {
        if (find(u) !== find(v)) {
            union(u,v);
            res += cost;
        }
    }

    return n === 1 ? res : -1;
}
