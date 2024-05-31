export default function fourSum(nums: number[], target: number): number[][] {
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
              const currentSet = new Set([nums[i], nums[j], nums[k], nums[l]]);
              for (let o = 0; o < solution.length; o++) {
                const lastSet = new Set(solution[solution.length - 2 - o]);
                const isSetEqual =
                  lastSet.size === currentSet.size &&
                  [...currentSet].every((value) => lastSet.has(value));
                if (isSetEqual) solution.pop();
              }
            }
          }
        }
      }
    }
  }
  return solution;
}
