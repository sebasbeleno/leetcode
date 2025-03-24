
function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0
    }

    const numsSet = new Set(nums)
    let maxSequence = 1

    for (let num of nums) {
        if (!numsSet.has(num - 1)) {
            let currentLen = 2
            while (numsSet.has(num + currentLen)) {
                currentLen += 1
            }
            maxSequence = Math.max(currentLen, maxSequence)
        }
    }

    return maxSequence
}

let nums = [2,20,4,10,3,4,5]

let ans = longestConsecutive(nums)

console.log(ans)