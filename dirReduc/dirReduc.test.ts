import { dirReduc } from "./dirReduc";

const tests = [
  [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"]],
  [
    ["NORTH", "NORTH", "NORTH", "NORTH", "NORTH"],
    ["NORTH", "NORTH", "NORTH", "NORTH", "NORTH"],
  ],
  [
    ["NORTH", "SOUTH", "SOUTH", "WEST", "WEST"],
    ["SOUTH", "WEST", "WEST"],
  ],
];
describe("dirReduc", () => {
  tests.forEach((test) => {
    it(`${test[0]}`, () => {
      const input = test[0];
      const expectedOutput = test[1];
      expect(dirReduc(input)).toEqual(expectedOutput);
    });
  });
});
