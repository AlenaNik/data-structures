// //edge list
// const graph = [[0,2], [2,3], [2,1], [1,3]];
// console.log(graph)
// // Adjacent List
// const graph2 = [[2], [2,3], [0,1,3], [1,2]];
// // Adjecent Matrix
//
// const graph4 = [
//     [0, 0, 1, 0],
//     [0, 0, 1, 1],
//     [1, 1, 0, 1],
//     [0, 1, 1, 0]
// ]
// // as an object, with a key value pairs
// const graph3 = {
//    a:  [0, 0, 1, 0],
//    b:  [0, 0, 1, 1],
//    c: [1, 1, 0, 1],
//    d: [0, 1, 1, 0]
// }
//
// console.log(graph3);
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {
        };
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    }
    showConnections() {
       // one function is missing here
    }
}
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
