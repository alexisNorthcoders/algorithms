import topKFrequent from "./topKFrequent";

describe('topKFrequent', () => {
    it('return most frequent 2 integers', () => {
        const input = [1,1,1,2,2,3]
        const k = 2
        expect(topKFrequent(input,k)).toEqual([1,2]);
    });
    it('return most frequent int', () => {
        const input = [3,0,1,0]
        const k = 1
        expect(topKFrequent(input,k)).toEqual([0]);
    });

});