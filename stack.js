/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {  //having trouble wrapping head around this, studying solution,
    //making much more sense
    let nd = new Node(val);
    console.log(nd)

     if(!this.first){   // if stack is empty
        this.first = nd;  //make first the node (nd)
        this.last = nd;   //make last the node (nd)
        console.log('FIRST', this.first)
        console.log('LAST', this.last)
     } else {
        let temporaryVal = this.first;   //save & put that to the side
        console.log('TEMP', temporaryVal)

        this.first = nd; //reassign first to the next node
        console.log('NEW FIRST', this.first)
        this.first.next = temporaryVal;   // now last is the original node,
        //and the new node is added to the top

     }
     this.size++
}

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // my original thought process:

    // this.first = this.first.next
    // console.log('FIRST', this.first)'

    //if stack is empty, then error, you cannot pop from empty stack
    if (!this.first) throw new Error("Can't pop from an empty stack.");

    if(this.first == this.last){
        this.last = null;
        //make all null because we are popping
        //only one element
    }
    this.first = this.first.next //this deletes the first val, now the 
    // new first value is the original first's next

}

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0; //returns true if size is 0
  }
}

module.exports = Stack;
