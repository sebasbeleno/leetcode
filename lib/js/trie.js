class TrieNode {
    children
    complete

    constructor () {
        this.children = []

        this.complete = false

        for (let i = 0; i < 26; i++) this.children.push(null);
    }
}

class Trie {
    root
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }

            node = node.children[char]
        }

        node.complete = true
    }

    search(word) {
        let node = this.root

        for (const char of word) {
            if (!node.children[char]) {
                return false
            }

            node = node.children[char]
        }

        return node.complete
    }

    startsWith(prefix) {
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