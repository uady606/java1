class Stack {
    items;
    constructor() {
        this.items =[]
    }
    push(element) {
        this.items.push(element);
        console.log('Element pushed', element);
    }

    pop() {
        if(this.items.length > 0) {
            const element = this.items.pop();
            console.log('Element poped', element);
            return element;
        }
        return null;
    }
}

const stack1 = new Stack();
stack1.push(2);

const stack2 = new Stack();
stack2.push(100);

stack1.pop();
stack1.pop();