/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
      let node = new Node(val);
      console.log(node)

      if(!this.first){
          this.first = node;
          this.last = node;
      } else {
          this.last.next = node; //if not empty, add to end of queue?
          this.last = node;  //we update the last pointer
      }
      this.size++
      console.log(this.size)
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {    // can't remove from empty queue
      if (!this.first) throw new Error("Can't dequeue from an empty queue.");
      let tempVal = this.first;

      if (this.first == this.last) {
          this.last = null;
        }
        this.first = this.first.next; //next is no first, removing origianl first
        this.size--   //we are removing so we decrement from size

        return temp.val;   //returning  removed value, we put aside in temp
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
      return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
      return this.size === 0;
  }
}

module.exports = Queue;
