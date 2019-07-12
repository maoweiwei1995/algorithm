var Graph = function (){
    // 定点
    this.vertices = []
    // 边
    this.adjList = {}
    // 增加顶点
    this.addVertices = function(v){
        this.vertices.push(v)
        this.adjList[v] = []
    }
    // 增加边
    this.addEdge = function(a, b) {
        this.adjList[a].push(b)
        this.adjList[b].push(a)
    }

    // 显示整个图
    this.print = function() {
        let s = '\n'
        for (let i = 0; i < this.vertices.length; i++) {
            let dingdian = this.vertices[i]
            s += dingdian + '=>'
            let edge = this.adjList[dingdian]
            for (let j = 0; j < edge.length; j++) {
                s += edge[j]
            }
            s += '\n'
        }
        console.log(s)
    }
 //  广度优先遍历
    this.bfs = function(v, callback) {
        let color = initColor(this.vertices)
        let queue = new Queue()
        let d = {}
        let pred = {}
        for (let i = 0; i < this.vertices.length; i++) {
            d[this.vertices[i]] = 0
            pred[this.vertices[i]] = null

        }
        queue.enqueue(v)
        while(!queue.isEmpty()) {
            let now = queue.dequeue()
            let bian = this.adjList[now]
            for (let i = 0; i < bian.length; i++) {
                let w = bian[i]
                if (color[w] === 'white') {
                    color[w] = 'gray'
                    // 设置回点
                    pred[w] = now
                    d[w] = d[now] + 1
                    queue.enqueue(w)
                }
            }
            color[now] = 'black'
            if (callback) {
                callback(now)
            }
        }
        return {
            pred,
            d
        }
    }

}

// 广度优先
function Queue() {
    this.items = []
    // 入队
    this.enqueue = function (el){
        return this.items.push(el)
    }
    // 出队
    this.dequeue = function(){
        return this.items.shift()
    }
    // 队头
    this.front = function(){
        return this.items[0]
    }
    //队是否为空
    this.isEmpty = function(){
        return this.items.length === 0
    }
}
// color
function initColor(arr){
    this.color = {}
    for (let i = 0; i < arr.length; i++){
        color[arr[i]] = 'white'
    }
    return color
}




var g = new Graph()
g.addVertices('A')
g.addVertices('B')
g.addVertices('C')
g.addVertices('D')
g.addVertices('E')
g.addVertices('F')
 
 
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('C', 'D')
g.addEdge('F', 'D')
// g.print()
// let s = g.bfs('A')
// let shortest = function(from, to) {
//     let v = to
//     while (v !== from) {
//         console.log(v)
//         v = s.pred[v]
//     }
// }
// shortest('A', 'F')


// 利用栈优化打印顺序
function Stack(){
    this.items = []
    this.push = function(val){
        this.items.push(val)
    }
    this.pop = function(){
        return this.items.pop()
    }
    this.peek = function(){
        return this.items[this.items.length-1]
    }
    this.isEmpty = function(){
        return this.items.length === 0
    }
    this.size = function(){
        return this.items.length
    }
    this.clear = function() {
        this.items = []
    }
}

let s = g.bfs('A')
let shortest = function(from, to) {
    let v = to
    let path = new Stack()
    while(v !== from) {
        path.push(v)
        v = s.pred[v]
    }
    path.push(v)
    let str = ''
    while(!path.isEmpty()){
        str += path.pop() + '-';
    }
    str = str.slice(0, str.length-1)
    console.log(str)
}
shortest('A','F')


// 最短路径 深度优先

function dfsVisite(u, color, callback) {
    color[u] = gray
    let n = adjList[u]
    for (let i = 0; i < n.length; i++) {
        if (color[n[i]] === 'white') {
            color[n[i]] = 'gray'
            dfsVisite(n[i], color, callback)
        }
        color[u] = 'black'
    }
    if (callback) {
        callback(u)
    }
}

function dfs(u, callback) {
    let color = new initColor()
    dfsVisite(u, color, callback)
}
