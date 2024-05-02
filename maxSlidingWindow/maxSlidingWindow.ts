export default function maxSlidingWindow(nums: number[], k: number): number[] {
  const maxArray: number[] = [];
  let left = 0;
  let right = 0;
  const queue: number[] = [];
  while (right < nums.length) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[right]) {
      queue.pop();
    }
    queue.push(right);
    if (left > queue[0]) {
      queue.shift();
    }
    if (right + 1 >= k) {
      maxArray.push(nums[queue[0]]);
      left += 1;
    }
    right += 1;
  }
  return maxArray;
}
