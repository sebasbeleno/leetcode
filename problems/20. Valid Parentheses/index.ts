function isValid(s: string): boolean {
    let stack:string[] = []
    let match = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of s ) {
        if (match[char]) {
            if (stack.length > 0 && stack[stack.length - 1] === match[char]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
};