import {binarySearch, recursiveBinarySearch} from "./binarySearch";

describe('binarySearch', () => {
    it('returns index for target 9 array [-1,0,3,5,9,12] ', () => {
        const array:number[] = [-1,0,3,5,9,12]
        const target:number = 9
        expect(binarySearch(array,target)).toBe(4);
    });
    it('returns -1 if index not found', () => {
        const array:number[] = [-1,0,3,5,9,12]
        const target:number = 2
        expect(binarySearch(array,target)).toBe(-1);
    });
    it('returns index for target 12 array [-1,0,3,5,9,12] ', () => {
        const array:number[] = [-1,0,3,5,9,12]
        const target:number = 12
        expect(binarySearch(array,target)).toBe(5);
    });
    it('returns index for target 20 array [10,20,30,40,50] ', () => {
        const array:number[] =[10,20,30,40,50]
        const target:number = 20
        expect(binarySearch(array,target)).toBe(1);
    });

});

describe('recursiveBinarySearch', () => {
    it('returns index for target 9 array [-1,0,3,5,9,12] ', () => {
        const array:number[] = [-1,0,3,5,9,12]
        const target:number = 9
        expect(recursiveBinarySearch(array,target)).toBe(4);
    });
    it('returns -1 if index not found', () => {
        const array:number[] = [-1,0,3,5,9,12]
        const target:number = 2
        expect(recursiveBinarySearch(array,target)).toBe(-1);
    });
    it('returns index for target 12 array [-1,0,3,5,9,12] ', () => {
        const array:number[] = [-1,0,3,5,9,12]
        const target:number = 12
        expect(recursiveBinarySearch(array,target)).toBe(5);
    });
    it('returns index for target 20 array [10,20,30,40,50] ', () => {
        const array:number[] =[10,20,30,40,50]
        const target:number = 20
        expect(recursiveBinarySearch(array,target)).toBe(1);
    });

});