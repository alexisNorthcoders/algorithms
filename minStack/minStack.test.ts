import MinStack from "./minStack";

describe('MinStack class', () => {
    it('instantiate new empty stack', () => {
        const newStack = new MinStack()
        expect(newStack.array).toEqual([]);
    });
    it('push method adds to the stack', () => {
        const newStack = new MinStack()
        newStack.push(2)
        expect(newStack.array).toEqual([2]);
    });
    it('top method returns top of the stack', () => {
        const newStack = new MinStack()
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        expect(newStack.top()).toEqual(3);
    });
    it('pop method removes top of the stack', () => {
        const newStack = new MinStack()
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        newStack.pop()
        expect(newStack.top()).toEqual(2);
    });
    it('getMin method returns min value of the stack', () => {
        const newStack = new MinStack()
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        expect(newStack.getMin()).toEqual(1);
    });
    it('getMin method returns min value of the stack after push and pop many times', () => {
        const newStack = new MinStack()
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        newStack.pop()
        newStack.pop()
        newStack.pop()
        newStack.push(5)
        newStack.push(1)
        newStack.pop()
        expect(newStack.getMin()).toEqual(5);
    });
    

});