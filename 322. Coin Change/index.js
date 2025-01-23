export function coinChange(coins, total) {
    if (total < 0) {
        return -1
    }

    const ans = dp(coins, total, Array(total).fill(parseFloat(Number.MAX_VALUE)))

    return ans
}

function dp(coins, remaining, counter) {
    if (remaining < 0) {
        return -1
    }

    if (remaining == 0) {
        return 0
    }

    if (counter[remaining - 1] != parseFloat(Number.MAX_VALUE)) {
        return counter[remaining - 1]
    }

    let min = parseFloat(Number.MAX_VALUE)

    coins.forEach((coin) => {
        const result = dp(coins, remaining - coin, counter)

        if (result >= 0 && result < min) {
            min = 1 + result
        }
    })

    if (min != parseFloat(Number.MAX_VALUE)) {
        counter[remaining - 1] = min
    } else {
        counter[remaining - 1] = -1
    }

    return counter[remaining - 1]

}