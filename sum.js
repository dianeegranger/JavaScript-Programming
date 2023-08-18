/*
* Diane E. Granger
* dianeegranger@gmail.com
*
* JavaScript function to compute the sum of two numbers
*
* Take 2 numbers as input from user
* Calculate the sum of 2 numbers with parseInt() method
* Return the sum of 2 numbers.
******************************************************************/

const prompt = require('prompt-sync')();

function sum(x, y) {
  return parseInt(x) + parseInt(y);
}

let a = prompt("Enter operand 1: ");
let b = prompt("Enter operand 2: ");

// Invoke sum function with arguments a and b
// Pass arguments a and b to sum function
// Return value will be in res
res = sum(a, b);

// Display the sum of a and b
console.log(`Sum of ${a} and ${b}:  ${res}`);

/*
OUTPUT:
PS C:\JS> node "c:\JS\sum.js"
Enter operand 1: 8
Enter operand 2: 9
Sum of 8 and 9:  17

PS C:\JS> node "c:\JS\sum.js"
Enter operand 1: 598
Enter operand 2: 499
Sum of 598 and 499:  1097

PS C:\JS> node "c:\JS\sum.js"
Enter operand 1: -5
Enter operand 2: 10
Sum of -5 and 10:  5

PS C:\JS> node "c:\JS\sum.js"
Enter operand 1: -5
Enter operand 2: -5
Sum of -5 and -5:  -10

PS C:\JS> node "c:\JS\sum.js"
Enter operand 1: -5
Enter operand 2: 10
Sum of -5 and 10:  5

PS C:\JS> node "c:\JS\sum.js"
Enter operand 1: 10
Enter operand 2: -5
Sum of 10 and -5:  5
*/