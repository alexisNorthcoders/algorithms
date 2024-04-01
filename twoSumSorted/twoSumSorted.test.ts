import twoSumSorted from "./twoSumSorted";

describe('twoSumSorted', () => {
    it('return indexes of values that add up to target', () => {
        const input=[2,7,11,15]
        const target=9
        expect(twoSumSorted(input,target)).toEqual([1,2]);
    });
    it('return indexes of values that add up to target', () => {
        const input=[2,3,4]
        const target=6
        expect(twoSumSorted(input,target)).toEqual([1,3]);
    });
    it('return indexes of values that add up to target', () => {
        const input=[-1,0]
        const target=-1
        expect(twoSumSorted(input,target)).toEqual([1,2]);
    });

});