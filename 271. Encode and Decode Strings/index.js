class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""

        for (let str of strs) {
            encodedStr = encodedStr + str.length + "#" + str
        }

        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // 3#str3#cat
    decode(str) {
        let ans = []
        let i = 0

        while (i < str.length) {
            let j = i

            while (str[j] !== "#") {
                j++
            }

            let length = parseInt(str.substring(i, j), 10)
            i = j + 1
            j = i + length

            ans.push(str.substring(i, j))
            i = j
        }


        return ans
    }
}
