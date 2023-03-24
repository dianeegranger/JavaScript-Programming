// Diane E. Granger
// dianeegranger@gmail.com
// Filename:  divisibility.js

// Write a JavaScript program to print all the numbers in the given
// array, numArr, that are divisible by n.
// In this case, n=3.

function divisibleBy(numArr, n) {
  console.log("List of numbers:  " + nums);
  console.log("The numbers from this list that are divisible by " + n + ":");
  for(let i=0; i<numArr.length; i++) {
    if(numArr[i] % n == 0) {
      console.log(numArr[i]);
    }
  }
}

var nums = [2, 22, 11, 14, 30, 93, 112, 3, 27, 81];
divisibleBy(nums,3);

// Output of function call:
// "...\divisibility.js"
// List of numbers:  2,22,11,14,30,93,112,3,27,81
// The numbers from this list that are divisible by 3:
// 30
// 93
// 3
// 27
// 81