class TrieNode {
    children: TrieNode[]
    complete: boolean

    constructor () {
        this.children = []

        this.complete = false

        for (let i = 0; i < 26; i++) this.children.push(null);
    }
}

class Trie {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let node = this.root

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }

            node = node.children[char]
        }

        node.complete = true
    }

    search(word: string): boolean {
        let node = this.root

        for (const char of word) {
            if (!node.children[char]) {
                return false
            }

            node = node.children[char]
        }

        return node.complete
    }

    startsWith(prefix: string): boolean {
        let node = this.root

        for (const char of prefix) {
            if (!node.children[char]) {
                return false
            }

            node = node.children[char]
        }

        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */