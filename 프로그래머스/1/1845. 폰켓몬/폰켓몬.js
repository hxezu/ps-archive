function solution(nums) {
    const numSet = new Set(nums)
    return nums.length/2>numSet.size? numSet.size : nums.length/2;
}