import isValidParentheses from "./isValidParentheses";

describe('isValidParentheses', () => {
    it('simple case', () => {
        const input = "()"
        expect(isValidParentheses(input)).toBe(true);
    });
    it('more complex case', () => {
        const input = "()[]{}"
        expect(isValidParentheses(input)).toBe(true);
    });
    it('false case', () => {
        const input = "(]"
        expect(isValidParentheses(input)).toBe(false);
    });
    it('false case', () => {
        const input = "({[)"
        expect(isValidParentheses(input)).toBe(false);
    });
    it('true case for more complex', () => {
        const input = "({[()]}){}"
        expect(isValidParentheses(input)).toBe(true);
    });

});