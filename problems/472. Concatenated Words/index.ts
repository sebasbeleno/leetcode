class TrieNode {
    children: Map<string, TrieNode>
    complete: boolean

    constructor() {
        this.children = new Map()

        this.complete = false

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
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }

            node = node.children.get(char)
        }

        node.complete = true
    }

    search(word: string): boolean {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (node.children.has(char)) {
                node = node.children.get(char)
                if (node.complete && this.search(word.substring(i + 1))) {
                    return true
                }
            } else {
                return false
            }
        }

        return node !== this.root && node.complete
    }


}

function findAllConcatenatedWordsInADict(words: string[]): string[] {
    words.sort((a, b) => a.length - b.length)
    const trie = new Trie()

    const ans = []

    for (const word of words) {
        if (trie.search(word)) {
            ans.push(word)
        } else {
            trie.insert(word)
        }
    }

    return ans
};