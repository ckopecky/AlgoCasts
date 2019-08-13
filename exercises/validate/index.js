// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    //assume node give is root node
    //assume that there is something wrong with the binary search tree. 

    //using recursion
    //start at top node -- recurse through tree structure
    //every time we recurse we will pass along min and max values

    //start at root node. 
    //it's the values that are immediate children that determine whether or not we have a valid bst

    //max should always be less than parent node for left side of tree
    //min value should always be more than parent node for right side of tree.

    if(!node) {
        return false;
    }

    //current node

    //move to left we are concerned about max value
    //checks to see if node.data is greater than max
    if(max !== null && node.data > max) {
        return false;
    }
    //move to right we are concerned about min value
    //checks to see if node.data is less than min
    if(min !== null && node.data < min) {
        return false
    }

    //if the left node exists and validate is falsy. node.data updates the max value
    if(node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if(node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;


    
            
   



}

module.exports = validate;
