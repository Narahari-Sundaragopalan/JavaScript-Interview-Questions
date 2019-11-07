/**
 * Given an undirected graph with n nodes labeled 1..n. 
 * Some of the nodes are already connected. 
 * The i-th edge connects nodes edges[i][0] and edges[i][1] together. 
 * Your task is to augment this set of edges with additional edges to connect all the nodes. 
 * Find the minimum cost to add new edges between the nodes such that all the nodes are 
 * accessible from each other.

Input:

n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes already connected by an edge.
newEdges, a list where each element is a triplet representing the pair of nodes 
between which an edge can be added and the cost of addition, respectively 
(e.g. [1, 2, 5] means to add an edge between node 1 and 2, the cost would be 5).
 */

const minCostToConnect = (N, edges, newEdges) => {
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
        const p1 = find(u);
        const p2 = find(v);

        if (p1 !== p2) {
            parents[p1] = p2;
            n--;
        }
    }

    const isSameEdge = (edge1, edge2) => {
        const [u1, v1] = edge1;
        const [u2, v2] = edge2;

        return (u1 === u2 && v1 === v2);
    }

    const isEdgeToBeConnected = (edge) => {
        for (let e of newEdges) {
            if (isSameEdge(edge, e)) {
                return true;
            }
        }

        return false;
    }

    for (let [u, v] of edges) {
        if (!isEdgeToBeConnected([u, v])) {
            union(u, v);
        }
    }

    newEdges.sort((a, b) => a[2] - b[2]);

    let res = 0;
    for (let [u, v, cost] of newEdges) {
        if (find(u) !== find(v)) {
            union(u, v);
            res += cost;
        }
    }

    return n === 1 ? res : -1;
}