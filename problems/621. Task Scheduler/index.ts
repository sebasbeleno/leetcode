function leastInterval(tasks: string[], n: number): number {
    const freq = new Map()

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]

        freq.set(task, (freq.get(task) || 0) + 1)
    }

    let sortedFreq = Array.from(freq.entries()).sort((a, b) => a[1] - b[1])

    let maxFreq = sortedFreq[sortedFreq.length - 1][1]
    sortedFreq.pop()

    let maxIdleTime = (maxFreq - 1) * n

    while (maxIdleTime > 0 && sortedFreq.length > 0) {
        maxIdleTime -= Math.min(maxFreq - 1, sortedFreq[sortedFreq.length - 1][1])
        sortedFreq.pop()
    }

    maxIdleTime = Math.max(0, maxIdleTime)


    return tasks.length + maxIdleTime
};