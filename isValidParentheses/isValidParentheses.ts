export default function isValidParentheses(string: string): boolean {
  const stack: Brackets[] = [];

  type Pairs = {
    "(": ")";
    "[": "]";
    "{": "}";
  };
  type Brackets = "(" | "[" | "{";
  const isOpeningBracket = (char: string): char is Brackets => {
    return ["(", "[", "{"].includes(char);
  };
  const pairs: Pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (const char of string) {
    if (stack.length === 0 && isOpeningBracket(char)) stack.push(char);
    else {
      const firstOut: Brackets = stack[stack.length - 1] || null;
      if (pairs[firstOut] === char) stack.pop();
      else if (isOpeningBracket(char)) {
        stack.push(char);
      }
    }
  }
  console.log(stack, "before return stack");
  return stack.length === 0;
}
