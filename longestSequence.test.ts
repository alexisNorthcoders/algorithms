import longestSequence from "./longestSequence";

describe('longestSequence', () => {
  it('should return the length of the longest consecutive sequence in the array', () => {
    expect(longestSequence([4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3])).toBe(5);
    expect(longestSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
    expect(longestSequence([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestSequence([])).toBe(0);
    expect(longestSequence([1])).toBe(1);
  });
});