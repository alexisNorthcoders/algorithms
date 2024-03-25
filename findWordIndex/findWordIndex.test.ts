import findWordIndex from "./findWordIndex";

describe('findWordIndex', () => {
    it('find word index for Dog for "the dog is hiding in this string"', () => {
        const string = "the dog is hiding in this string"
        const word = "dog"
        expect(findWordIndex(string,word)).toBe(2);
    });
    it('return 0 if word not found "the god is hiding in this string"', () => {
        const string = "the god is hiding in this string"
        const word = "dog"
        expect(findWordIndex(string,word)).toBe(0);
    });
    it('return 0 for word dog "the dogs is hiding in this string"', () => {
        const string = "the god is hiding in this string"
        const word = "dog"
        expect(findWordIndex(string,word)).toBe(0);
    });
    it('return 0 for word dog "the dog\'s is hiding in this string"', () => {
        const string = "the god is hiding in this string"
        const word = "dog"
        expect(findWordIndex(string,word)).toBe(0);
    });
    it('return 0 for word dog "the Dog is hiding in this string"', () => {
        const string = "the god is hiding in this string"
        const word = "dog"
        expect(findWordIndex(string,word)).toBe(0);
    });

});