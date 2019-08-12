// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* 
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}
*/

// function reverseInt(n) {
//     let num = n + '';
//     if(n < 0){
//         let split = num.split('').reverse();
//         let sign = split.pop();
//         split.unshift(sign);
//         let join = split.join('');
//         return Number(join);
//     }
    
//     return Number(num.split('').reverse().join(''));

// }

const reverseInt = num => {
    let sign = Math.sign(num);
    if(sign === 1) {
        return Number(num.toString().split('').reverse().join(''));
    } else {
        let split = num.toString().split('');
        split.shift();
        return Number(split.reverse().join('')) * sign;
    }
}

module.exports = reverseInt;
