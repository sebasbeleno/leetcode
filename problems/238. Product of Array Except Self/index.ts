function productExceptSelf(nums: number[]): number[] {
    let pre = new Array(nums.length)
    pre[0] = 1

    for (let i = 1; i < nums.length; i++) {
        pre[i] = pre[i - 1] * nums[i - 1]
    }

    let post = new Array(nums.length)
    post[nums.length - 1] = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        post[i] = post[i + 1] * nums[i + 1]
    }

    let ans = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        ans[i] = pre[i] * post[i]
    }

    return ans
};