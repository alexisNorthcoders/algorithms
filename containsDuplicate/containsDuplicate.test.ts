import { containsDuplicate } from "./containsDuplicate";

describe('containsDuplicate', () => {
    it('should return true for array [1,2,3,1]', () => {
        const nums = [1, 2, 3, 1];
        expect(containsDuplicate(nums)).toBe(true);
    });

    it('should return false for array [1,2,3,4]', () => {
        const nums = [1, 2, 3, 4];
        expect(containsDuplicate(nums)).toBe(false);
    });

    it('should return true for array [1,1,1,3,3,4,3,2,4,2]', () => {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        expect(containsDuplicate(nums)).toBe(true);
    });
});