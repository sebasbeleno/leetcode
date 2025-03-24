/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = {}
    const inDegree = {}

    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
        inDegree[i] = 0
    }

    prerequisites.forEach(edge => {
        let parent = edge[1];
        let child = edge[0];

        graph[parent].push(child)
        inDegree[child]++
    })

    const q = new QueueT()

    Object.keys(inDegree).forEach(key => {
        if (inDegree[key] == 0) {
            q.enqueue(key)
        }
    })

    const ans = []

    while(q.length != 0) {
        const vertex = q.dequeue()

        ans.push(Number(vertex))

        graph[vertex].forEach(child => {
            inDegree[child] -= 1

            if (inDegree[child] == 0) {
                q.enqueue(child)
            }
        })
    }

    return ans.length != numCourses ? [] : ans

};

// Queue data structure
class QueueT {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}
