import groupAnagram from "./groupAnagram";

describe('groupAnagram', () => {
    it('Given array of strings, group the anagrams"', () => {
        const input = ["eat","tea","tan","ate","nat","bat"]
        
        expect(groupAnagram(input)).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]]);
    });
   
});