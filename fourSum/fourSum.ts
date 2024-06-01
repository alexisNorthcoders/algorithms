export function fourSum(nums: number[], target: number): number[][] {
  const solution: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (i == j || i == k || i == l || j == k || j == l || k == l) {
            continue;
          }
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            solution.push([nums[i], nums[j], nums[k], nums[l]]);
            if (solution.length > 1) {
              
              const currentSolution = [nums[i], nums[j], nums[k], nums[l]]
              currentSolution.sort((a,b)=> a-b)
              for (let o = 0; o < solution.length-1; o++) {
                const lastSolution = solution[solution.length - 2 - o]
                lastSolution.sort((a,b)=> a-b)
                const isSameSolution = currentSolution.every((value,index) => value === lastSolution[index]);
                if (isSameSolution) solution.pop();
              }
            }
          }
        }
      }
    }
  }
  return solution;
}
export function fourSumPointers(nums: number[], target: number): number[][] {
  const solution: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        let currentSum = nums[i] + nums[j] + nums[left] + nums[right];

        if (currentSum === target) {
          solution.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left += 1;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right -= 1;
          }
          left += 1;
          right -= 1;
        } else if (currentSum < target) {
          left += 1;
        } else {
          right -= 1;
        }
      }
    }
  }
  return solution;
}

const nums = [2, 1, 4, 3, 6, 5];
const target = 12;
fourSum(nums, target);
