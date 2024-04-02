import minEatingSpeed from "./minEatingSpeed";

describe('minEatingSpeed', () => {
    it('', () => {
        const piles = [3,6,7,11]
        const h = 8
        
        expect(minEatingSpeed(piles,h)).toBe(4);
    });
    it('', () => {
        const piles = [30,11,23,4,20]
        const h = 5
        
        expect(minEatingSpeed(piles,h)).toBe(30);
    });
    it('', () => {
        const piles = [30,11,23,4,20]
        const h = 6
        
        expect(minEatingSpeed(piles,h)).toBe(23);
    });
    it('efficiency check', () => {
        const piles = [332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184]
        const h = 823855818
        
        expect(minEatingSpeed(piles,h)).toBe(14);
    });

});