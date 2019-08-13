// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { //n^2
    //two loops
    // i = 0 to < arr.length
    // j = 0 to < arr.length - 1
    //if the element at j is greater than j + 1
    //swap elements at j and j + 1

    for(i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    
    return arr;
}
//selection sort divides list into two subparts: the items already sorted and the items remaining to be sorted. Initially the sorted sublist is empty. Algorithm finds the smallest element in the unsorted sublist and exhanges it with the leftmost unsorted element.
//THE PROVE ME WRONG SORTING ALGORITHM
function selectionSort(arr) { //n^2
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

function merge(left, right) {
    var array = [];
  
    while(left.length && right.length) {
      if(left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    return [...array, ...left, ...right]
    
  }
  function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }
    
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
  }

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
