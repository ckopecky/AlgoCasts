// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
    constructor(data) { // WHAT THE NEW NODE IS...
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
      insert(data){
          //recursive solution
          // less than this.data -- see if node already assigned to left property
          
          let node = (data);
          if(node < this.data && this.left) {
              this.left.insert(data);
          } else if(node < this.data) {
              this.left = new Node(data);
          }

          if(node >= this.data && this.right) {
              this.right.insert(data);
          } else if(node >= this.data) {
              this.right = new Node(data);
          }

          
           

      }

      contains(data) {
          if(this.data === data) {
              return this;
          }
          if(this.data < data && this.right) {
            return this.right.contains(data);
          }
          else if(this.data > data && this.left) {
              return this.left.contains(data);
          }
          else {
              return null;
          }
      }
    }
  
  module.exports = Node;
  
