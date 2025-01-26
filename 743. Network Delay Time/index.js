/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let adjacency = new Map()

    // we save nodes as a map -> src: [target, time]
    for (const time of times) {
        const src = time[0];
        const dst = time[1];
        const t = time[2];
        if (!adjacency.has(src)) {
            adjacency.set(src, []);
        }
        adjacency.get(src).push([dst, t]);
    }

    const pq = []
    pq.push({ node: k, time: 0 })
    const visited = new Set()
    let delays = 0

    while (pq.length > 0) {
        pq.sort((a, b) => a.time - b.time)
        const { time, node } = pq.shift()

        if (visited.has(node)) {
            continue
        }

        visited.add(node)

        delays = Math.max(delays, time)
        const neighbors = adjacency.get(node) || []

        for (const neighbor of neighbors) {
            const neighborNode = neighbor[0]
            const neighborTime = neighbor[1]

            if (!visited.has(neighborNode)) {
                const newTime = time + neighborTime
                pq.push({ node: neighborNode, time: newTime })
            }
        }

    }

    if (visited.size == n) {
        return delays
    }

    return -1;
};