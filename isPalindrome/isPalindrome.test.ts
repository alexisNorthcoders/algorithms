import isPalindrome from "./isPalindrome";

describe('isPalindrome', () => {
    it('should return true for "A man, a plan, a canal: Panama"', () => {
        const input:string = "A man, a plan, a canal: Panama"
        expect(isPalindrome(input)).toBe(true);
    });
    it('should return false for "race a car"', () => {
        const input:string = "race a car"
        expect(isPalindrome(input)).toBe(false);
    });
    it('should return true for empty string', () => {
        const input:string = ""
        expect(isPalindrome(input)).toBe(true);
    });
    it('should return true for "amanaplanacanalpanama"', () => {
        const input:string = "amanaplanacanalpanama"
        expect(isPalindrome(input)).toBe(true);
    });
    
    it('should return true for ",,,,,,,,,,,,acva"', () => {
        const input:string = ",,,,,,,,,,,,acva"
        expect(isPalindrome(input)).toBe(false);
    });

});