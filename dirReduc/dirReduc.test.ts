import dirReduc from "./dirReduc";

describe('dirReduc', () => {
    it('["NORTH”, "SOUTH”, “SOUTH”, “EAST”, “WEST”, “NORTH”, “WEST”]', () => {
        const input = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
        const expectedOutput = ["WEST"]
        expect(dirReduc(input)).toEqual(expectedOutput);
    });

});