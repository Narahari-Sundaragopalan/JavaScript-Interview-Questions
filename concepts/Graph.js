/*
Graph consists of a series of nodes. Each node contains a 
value and reference to other nodes.

Node {
    value,
    lines: [(Node), (Node)]
}

Graph{
    nodes: [
        Node {...},
        Node {...},
        ...
    ]
}
*/
class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(value) {
        this.nodes.push({
            value,
            lines: []
        });
    }

    find(value) {
        this.nodes.find(node => {
            return node.value === value;
        });
    }

    addLine(startValue, endValue) {
        let startNode = this.find(startValue);
        let endNode = this.find(endValue);

        if (!startNode || !endNode) {
            throw new Error ("Both nodes must exist");
        }

        startNode.lines.push(endNode);
    }
}