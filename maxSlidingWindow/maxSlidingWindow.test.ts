import maxSlidingWindow from "./maxSlidingWindow";

describe('maxSlidingWindow', () => {
    it('returns array of max values of each window', () => {
        const input = [1]
        const k = 1
        expect(maxSlidingWindow(input,k)).toEqual([1]);
    }),
    it('returns array of max values of each window', () => {
        const input = [1,3,-1,-3,5,3,6,7]
        const k = 3
        expect(maxSlidingWindow(input,k)).toEqual([3,3,5,5,6,7]);
    }),
    it('returns array of max values of each window', () => {
        const input = [1,-1]
        const k = 1
        expect(maxSlidingWindow(input,k)).toEqual([1,-1]);
    })

});