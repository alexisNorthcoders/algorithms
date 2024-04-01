import searchMatrix from "./searchMatrix";

describe('searchMatrix', () => {
    it('', () => {
        const input = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
        const target = 3
        expect(searchMatrix(input,target)).toBe(true);
    });
    it('', () => {
        const input = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
        const target = 13
        expect(searchMatrix(input,target)).toBe(false);
    });


});