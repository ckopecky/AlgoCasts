// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.stack = [];
        //this.storage = {};
        //this.count = 0;
    }

    push(item) {
        this.stack = [this.stack, ...item];
        /*
        
        this.stack[this.count] = item;
        this.count++
        */
    }

    pop() {
        return this.stack.pop();
        // let popped = this.stack[this.count];
        // delete this.stack[this.count];
        // return popped;

    }

    peek() {
        return this.stack[this.stack.length - 1];
        //return this.stack[this.count]
    }
}

module.exports = Stack;
