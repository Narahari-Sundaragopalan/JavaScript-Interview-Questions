/**
 * Given an underected connected graph with n nodes labeled 1..n. A bridge (cut edge) is 
 * defined as an edge which, when removed, makes the graph disconnected (or more precisely, 
 * increases the number of connected components in the graph). 
 * Equivalently, an edge is a bridge if and only if it is not contained in any cycle. 
 * The task is to find all bridges in the given graph. 
 * Output an empty list if there are no bridges.

Input:

n, an int representing the total number of nodes.
edges, a list of pairs of integers representing the nodes connected by an edge.

Input: n = 5, edges = [[1, 2], [1, 3], [3, 4], [1, 4], [4, 5]]

Output: [[1, 2], [4, 5]]
Explanation:
There are 2 bridges:
1. Between node 1 and 2
2. Between node 4 and 5
If we remove these edges, then the graph will be disconnected.
If we remove any of the remaining edges, the graph will remain connected.
 */

const criticalConnections = (n, links) => {
    const buildGraph = () => {
        const g = [];
        for (let i = 0; i <= n; i++) {
            g.push([]);
        }

        for (let [u, v] of links) {
            g[u].push(v);
            g[v].push(u);
        }

        return g;
    }

    const graph = buildGraph();
    const discovered = [];
    const lowLinks = [];
    const res = [];
    let time = 0;

    for (let i = 0; i <= n; i++) {
        discovered.push(-1);
    }

    const dfs = (u, prev) => {
        discovered[u] = lowLinks[u] = time++;
    
        for (const v of graph[u]) {
            if (v === prev) {
                continue;
            }

            if (discovered[v] === -1) {
                dfs(v, u);
                lowLinks[u] = Math.min(lowLinks[u], lowLinks[v]);

                if (lowLinks[v] > discovered[u]) {
                    res.push([u, v]);
                }
            } else {
                lowLinks[u] = Math.min(lowLinks[u], discovered[v]);
            }
        }
    }

    dfs(1, -1);
    return res;
}

/**
 * If critical nodes are asked for, push only the "at" node to the result array. 
 */

const criticalConnections = (n, links) => {
    const buildGraph = () => {
        const g = [];
        for (let i = 0; i <= n; i++) {
            g.push([]);
        }

        for (const [at, to] of links) {
            g[at].push(to);
            g[to].push(at);
        }

        return g;
    }

    const graph = buildGraph();
    const result = [];
    const lowLinks = [];
    let time = 0;
    const visited = [];
    
    for (let i = 0; i <= n; i++) {
        visited.push(-1);
    }

    const dfs = (at, prev) => {
        visited[at] = lowLinks[at] = time++;

        for (let to of graph[at]) {
            if (to === prev) {
                continue;
            }

            if (visited[to] === -1) {
                dfs(to, at);
                lowLinks[at] = Math.min(lowLinksw[at], lowLinks[to]);

                if (lowLinks[to] > visited[at]) {
                    result.push([at, to]);
                }
            } else {
                lowLinks[at] = Math.min(lowLinks[at], visited[to]);
            }
        }
    }

    dfs(1, -1);
    return result;
}