export default function twoSumSorted(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1
    let sum: number;

    while (left < right) {
        sum = numbers[left] + numbers[right]
        if (sum > target) {
            right--
        }
        else if (sum < target) {
            left++
        }
        else {
            return [++left, ++right]
        }
    }
    return [-1]
}