export function letterCombinations(digits) {
    let combinations = []

    if (digits.length == 0) {
        return combinations
    }

    let digitsMapping = {
        1: [""],
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };

    backtrack(0, [], digits, digitsMapping, combinations)

    return combinations
}

function backtrack(index, path, digits, letters, combinations) {
    if (path.length === digits.length) {
        const str = path.join("")
        combinations.push(str)

        return
    }

    const possibleLetters = letters[digits[index]]

    for (let i = 0; i < possibleLetters.length; i++) {
        let letter = possibleLetters[i]
        path.push(letter)
        backtrack(index + 1, path, digits, letters, combinations)
        path.pop()
    }
}


