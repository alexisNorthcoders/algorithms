import  isAnagram from "./isAnagram";

describe('isAnagram', () => {
    it('should return true for "anagram" and "nagaram"', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
    });

    it('should return false for "rat" and "car"', () => {
        expect(isAnagram("rat", "car")).toBe(false);
    });
});