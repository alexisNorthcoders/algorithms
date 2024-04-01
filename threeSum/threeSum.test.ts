import threeSum from "./threeSum";

describe('threeSum', () => {
    it('return unique index elements that sum to 0', () => {
        const input = [-1, 0, 1, 2, -1, -4]
        expect(threeSum(input)).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    });
    it('return unique index elements that sum to 0', () => {
        const input = [0,1,1]
        expect(threeSum(input)).toEqual([]);
    });
    it('return unique index elements that sum to 0', () => {
        const input = [0,0,0]
        expect(threeSum(input)).toEqual([[0,0,0]]);
    });

});