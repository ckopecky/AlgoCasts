class Node {
  constructor(data, next = null) { 
    //null is defaulted to null in the case where someone doesn't pass a next argument into the instantiation of the Node. 
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //linked list class only knows about the first node
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
      this.head = new Node(data, this.head); 
      //the this.head in the next position is the old this.head. 
  }

  size() {
    let counter = 0;
    let node = this.head;
      while (node) { //while node exists/truthy value
        counter += 1;
        node = node.next;//looks at current node and look at next prop
      }
      return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node) {
      if (!node.next) {
          return node;
      } 
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
    return this.head;
  }

  removeFirst() {
    //no head? return null
    if (!this.head) {
      return null;
    } 
    //head exists
    if(this.head.next === null) {
      this.head = null;
    }

    else {
      this.head = this.head.next;
    }
  }

  removeLast() {

    if(!this.head) {
      return;

    }
    if(!this.head.next) {
      //this means that only 1 node
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while(node.next) { //as long as its truthy. 
      prev = node;
      node = node.next;
    }
    prev.next = null;
   
  }

  insertLast(data) {
    let last = this.getLast();
    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(int) {
    let counter = 0;
    let node = this.head;
    if(!this.head) {
      return null;
    }


    while (node) {
      if (int === counter) {
        return node;
      } else {
        counter++;
        node = node.next;
      }
    }
    return null; //case in which index is out of bounds;
  }

  removeAt(int) {
    if (!this.head) {
      return;
    }

    if(int === 0) {
      this.head = this.head.next;
    } else {
    const prev = this.getAt(int - 1);
    const next = this.getAt(int + 1);

    if (!prev.next) {
      return this.removeLast();
    }
    prev.next = prev.next.next;
    }
  }

  insertAt(data, int) {
    //takes care of empty list
    if (!this.head) {
      return this.insertFirst(data);
    }
    //takes care of int decalred outside of size
    if (int > this.size()) {
      return this.insertLast(data);
    }

    if (int === 0) {
      this.head = new Node(data, this.head);
      return this.head;
    }

    //gets previous node
    let prev = this.getAt(int - 1);
    //gets next node
    //assigns new Node with data and a next value
    prev.next = new Node(data, prev.next);
  }

  forEach(func) {
    let node = this.head;
    if (!this.head) {
      return 0;
    } else {
      while (node) {
        func(node);
        node = node.next;
      }
    }
  }

  //optional...
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// const NodeOne = {
//     data: 123,
// };
// const nodeTwo = {
//     data: 456
// }

// NodeOne.next = nodeTwo;
// nodeTwo.next = null;

// console.log(NodeOne);
// console.log(nodeTwo);
