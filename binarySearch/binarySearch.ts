export function binarySearch(array: number[], target: number): number {
    let start = 0
    let end = array.length - 1

    while (start <= end) {
        const mid = start + end >> 1 // same as Math.floor((start+end)/2)
        if (array[mid] === target) return mid
        else if (array[mid] < target) {
            start = mid + 1
        }
        else {
            end = mid - 1

        }
    }
    return -1
}
export function recursiveBinarySearch(array: number[], target: number,start=0,end=array.length-1): number {
   
    if (start > end) return -1;
    let mid = start + end >> 1;
    if (array[mid] === target) return mid;
    if (array[mid] > target)
        return recursiveBinarySearch(array, target, start, mid - 1);
    else
        return recursiveBinarySearch(array, target, mid + 1, end);

}