import twoSum from "./twoSum";

describe('twoSum', () => {
    test('should return [0, 1] for [2, 7, 11, 15] and target 9', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      expect(twoSum(nums, target)).toEqual([0, 1]);
    });
  
    test('should return [1, 2] for [3, 2, 4] and target 6', () => {
      const nums = [3, 2, 4];
      const target = 6;
      expect(twoSum(nums, target)).toEqual([1, 2]);
    });
  
    test('should return [0, 1] for [3, 3] and target 6', () => {
      const nums = [3, 3];
      const target = 6;
      expect(twoSum(nums, target)).toEqual([0, 1]);
    });
  
});