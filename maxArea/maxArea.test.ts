import maxArea from "./maxArea";

describe('maxArea', () => {
    it('calculate max area between 2 heights', () => {
        const input = [1,8,6,2,5,4,8,3,7]
        expect(maxArea(input)).toBe(49);
    });
    it('calculate max area between 2 heights', () => {
        const input = [1,1]
        expect(maxArea(input)).toBe(1);
    });
    it('calculate max area between 2 heights', () => {
        const input = [2,3,4,5,18,17,6]
        expect(maxArea(input)).toBe(17);
    });

});