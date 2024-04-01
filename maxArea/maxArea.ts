export default function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let highestArea = 0
    while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left)
        if (currentArea > highestArea) { highestArea = currentArea }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return highestArea
}