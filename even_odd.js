/*  
Diane E. Granger
dianeegranger@gmail.com
January 20, 2023

Day 3 Assignment | Control Statements
JavaScript Programming Essentials
Instructor:  Sanjay Gautam
January 10, 2023 - January 14, 2023

Assignment:  
Write a program to check if a number is odd or even.
*/

function even_odd(num) {
  if (num % 2 == 0)
    // remainder is 0, so num is even
    return ("The number " + num + " is even.");
  else 
    // remainder is not 0, so num is odd
    return ("The number " + num + " is odd.");
}

console.log(even_odd(5));
console.log(even_odd(10));
console.log(even_odd(3));
console.log(even_odd(20));
console.log(even_odd(15));

/*
TERMINAL OUTPUT:
PS C:\Users\diane\letsupgrade\game> node "c:\Users\diane\letsupgrade\game\even_odd.js"
The number 5 is odd.
The number 10 is even.
The number 3 is odd.
The number 20 is even.
The number 15 is odd.
PS C:\Users\diane\letsupgrade\game>
*/