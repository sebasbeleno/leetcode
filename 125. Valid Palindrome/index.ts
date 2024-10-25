function isPalindrome(s: string): boolean {
    s = s.replace(/[^0-9A-Z]+/gi,"").replace(' ', '').toLocaleLowerCase();
    let i = 0
    let j = s.length - 1

    while (i < j) {
        if (s[i] != s[j]) {
            return false
        }

        i += 1
        j -= 1
    }

    return true
};