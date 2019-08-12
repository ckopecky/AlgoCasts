// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children = [...this.children, new Node(data)];
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
        return this.children;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    //no add or remove since we associate manipulating the arr with an actual node

    traverseBF(fn) {
        //generations.
        /*
        
        create empty array and take root node and stick it into array
        iterate through array -- while the array has some elements in it, take out the very first element, retrieve all of this nodes children and stick those children into the array. Call our function that is provided to the traverse method. Throw this node away since we are basically done with it. 

        Move to next node. 
        
        
        */
        let root = this.root;
        let arr = [root];
        

        while(arr.length) {
            let first = arr.shift();
            arr = [...arr, ...first.children] //arr.push(...first.children);
            fn(first);
        }
    }

    traverseDF(fn) {
        //parent -> to its children -> to its children, back up to parent and then any other children...etc. 
        let root = this.root;
        let arr = [root];
        while(arr.length) {
            let first = arr.shift();
            arr = [...first.children, ...arr]; //arr.unshift(...first.children)
            fn(first)
        }

    }

    //why do we care about order? 
    //BF => hierarchy. Top -- most important person






}

module.exports = { Tree, Node };
