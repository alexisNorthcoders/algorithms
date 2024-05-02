export default class MinStack {
  array: number[];
  min: number;
  constructor() {
    this.array = [];
    this.min = 0;
  }
  push(val: number): void {
    if (this.array.length === 0) {
      this.min = val;
      this.array.push(val);
    } else {
      if (val < this.min) {
        this.min = val;
      }
      this.array.push(val);
    }
  }
  pop(): void {
    this.array.pop();
    this.min = Math.min(...this.array);
  }
  top(): number {
    return this.array[this.array.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}
