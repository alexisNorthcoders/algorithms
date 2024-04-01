import productExceptSelf from "./productExceptSelf";

describe('productExceptSelf', () => {
    it('returns array with products of elements except self', () => {
        const input = [1,2,3,4]
        expect(productExceptSelf(input)).toEqual([24,12,8,6]);
    });
    it('returns array with products of elements except self', () => {
        const input = [-1,1,0,-3,3]
        expect(productExceptSelf(input)).toEqual([-0,0,9,-0,0]);
    });

});