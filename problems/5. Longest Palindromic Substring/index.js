/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const dp = [...new Array(s.length)].map(_ => new Array(s.length).fill(false))

    let substring = ''

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true

        substring = s[i]
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = true

            substring = s.substring(i, i + 2)
        }
    }

    for (let k = 2; k < s.length; k++) {
        for (let i = 0; i < s.length; i++) {
            let j = k + i

            if (s[i] === s[j] && dp[i + 1][j - 1] === true) {

                substring = substring.length < (j - i + 1) ? s.substring(i, j + 1) : substring

                dp[i][j] = true
            }
        }
    }

    return substring
};