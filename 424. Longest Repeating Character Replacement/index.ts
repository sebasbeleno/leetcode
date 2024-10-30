function characterReplacement(s: string, k: number): number {
    let chars = new Map()
    let ans = 0
    let l = 0

    for (let r = 0; r < s.length; r++) {
        let currentWindowSize = r - l + 1
        let currentChar = s[r]

        chars.set(currentChar, (chars.get(currentChar) || 0) + 1)

        if (currentWindowSize - Math.max(...chars.values()) > k) {
            chars.set(s[l], chars.get(s[l]) - 1);
            l++;
        }

        currentWindowSize = r - l + 1;
        ans = Math.max(ans, currentWindowSize);
    }

    return ans
};