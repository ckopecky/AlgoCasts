// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
//anytime you see width, you want to start with a BF traversal of the tree

//maintain a counter array and a queue with children
let counter = [0];
let level = 0;
let stop = 'stop';
let arr = [root, stop]

    while(arr.length) {
        //take out first node
        let first = arr.shift();
        //take children and add to array
        //increment counter by 1
        //throw root out
        //next is stopper -- reinsert it to end of array and add another index to counter array and instantiate it to 0

        if(first === stop && arr.length > 0) {
            arr = [...arr, first];
            counter = [...counter, 0]
            level += 1;
        } 
        if(!first.children) {
            counter[level] += 0;
        } else {
            if(first === stop) {
                return;
            }
            arr =[...arr, ...first.children];
            counter[level] += 1;
            console.log(arr, counter, "after adding children");

        }
    }
    return counter;
}


module.exports = levelWidth;
