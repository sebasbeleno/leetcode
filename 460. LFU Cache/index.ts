class LFUCache {
    capacity: number
    items: Map<number, [number, number]> // key -> [vlaue, freq]
    freqMap: Map<number, Set<number>>
    minFreq: number
    count: number

    constructor(capacity: number) {
        this.capacity = capacity
        this.items = new Map()
        this.freqMap = new Map()

        this.freqMap.set(0, new Set())

        this.minFreq = 0
        this.count = 0
    }

    get(key: number): number {
        if (!this.items.has(key)) {
            return -1
        }

        const item = this.items.get(key)
        item[1]++
        const [value, freq] = item

        this.renewFreqGroup(key, freq)

        return value

    }

    put(key: number, value: number): void {
        // check if the element exist on the cache
        if (this.items.has(key)) {
            const item = this.items.get(key)

            item[0] = value
            item[1]++

            const [_, freq] = item

            this.renewFreqGroup(key, freq)
            return
        }
        // if the curent count is less than capacity ==
        if (this.count < this.capacity) {

            this.items.set(key, [value, 0])

            // if the current counter is less than the capacity it means that the minFreq is 0
            const startFreq = this.freqMap.get(0)
            startFreq.delete(key)
            startFreq.add(key)

            console.log("current count of items on the first list ->" + this.count + ", and current capacity -> " + this.capacity)
            this.minFreq = 0
            this.count++
            return

        }

        // delete the lru
        const currentGroup = this.freqMap.get(this.minFreq)
        const [LRU] = currentGroup
        currentGroup.delete(LRU)
        this.freqMap.get(0).add(key)

        this.items.delete(LRU)
        this.items.set(key, [value, 0])

        this.minFreq = 0

        return
    }


    private renewFreqGroup(key: number, freq: number) {
        const currFreqGroup = this.freqMap.get(freq - 1);
        currFreqGroup.delete(key);

        // if is empty and and the current freq is eql to the prev
        if (!currFreqGroup.size && this.minFreq === freq - 1) {
            this.minFreq = freq;
        }

        // if there is not a mapping of the current freq, create 
        if (!this.freqMap.has(freq)) {
            this.freqMap.set(freq, new Set([key]));
        } else {
            this.freqMap.get(freq).add(key)
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */