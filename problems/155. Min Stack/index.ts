class MinStack {
    valueStack:number[]
    minStack:number[]

    constructor() {
        this.valueStack = []
        this.minStack = []
    }

    push(val: number): void {
        this.valueStack.push(val);

        val = Math.min(
            val,
            this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length - 1],
        );
        this.minStack.push(val);
    }

    pop(): void {
        this.minStack.pop()
        this.valueStack.pop()
    }

    top(): number {
        return this.valueStack[this.valueStack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */