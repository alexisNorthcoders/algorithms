export default function searchMatrix(matrix: number[][], target: number): boolean {

    for (const row of matrix) {
        let left = 0
        let right = row.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (row[mid] > target) {
                right = mid - 1
            }
            else if (row[mid] < target) {
                left = mid + 1
            }
            else return true
        }
    }
    return false
}