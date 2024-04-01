export default function threeSum(numbers: number[]): number[][] {
    const result: number[][] = []
    numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length; i++) {
        if (i > 0 && numbers[i] == numbers[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = numbers.length - 1;
        while (left < right) {
            let sum = numbers[i] + numbers[left] + numbers[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([numbers[i], numbers[left], numbers[right]]);
                left++;
                while (numbers[left] == numbers[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    return result
}