function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0 ) return 0

    let chars = new Set();

    let left = 0
    let right = 0

    let maxLen = 1
    while (right < s.length) {
        const currentChar = s[right]

        // we find a duplicate on the string
        while(chars.has(currentChar)) {
            let leftChar = s[left]

            chars.delete(leftChar)
            left++
        }

        chars.add(currentChar)
        right++
        maxLen = Math.max(maxLen, right - left)
    }

    return maxLen
};