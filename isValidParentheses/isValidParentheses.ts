export default function isValidParentheses(string: string): boolean {
  const stack: Brackets[] = [];

  type Pairs = {
    "(": ")";
    "[": "]";
    "{": "}";
  };
  type Brackets = "(" | "[" | "{";

  const pairs: Pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (const char of string) {
    if (stack.length === 0) {
      stack.push(char as Brackets);
    } else {
      const firstOut: Brackets = stack[stack.length - 1];

      if (pairs[firstOut] === char) {
        stack.pop();
      } else if ("([{".includes(char)) {
        stack.push(char as Brackets);
      }
    }
  }
  return stack.length === 0;
}
