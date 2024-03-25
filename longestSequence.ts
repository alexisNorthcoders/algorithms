export default function longestSequence(nums: number[]): number {
    if (!nums.length) return 0
    nums.sort((a, b) => a - b)
    let longestSequence = 1
    let currentSequence = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) { continue }
        else if (nums[i] - 1 === nums[i - 1]) {
            currentSequence++
            if (currentSequence > longestSequence) {
                longestSequence = currentSequence
            }
        }
        else {
            if (currentSequence > longestSequence) {
                longestSequence = currentSequence
            }
            currentSequence = 1
        }
    }
    return longestSequence
};
