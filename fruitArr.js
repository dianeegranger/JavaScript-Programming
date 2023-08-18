/*
* Diane E. Granger
* dianeegranger@gmail.com
* github.com/dianeegranger
*
* JavaScript
* Creates an array called 'fruits".
* Populates the "fruits" array with the following fruits:
* "apple", "banana", "orange", "grape", and "mango"
* Display the total number of fruits in the array
******************************************************************/

// Declare and initialize array named "fruits"
const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Get the number of items in the fruits array
// Count of numbr of items includes duplicates
let num_fruits = fruits.length;

console.log(`List of items in fruits array: ${fruits}`);
console.log(`\nNumber of items in fruits array: ${num_fruits}`);

/*
OUTPUT:
PS C:\JS> node "c:\JS\fruitArr.js"
List of items in fruits array: apple,banana,orange,grape,mango

Number of items in fruits array: 5
PS C:\JS> 
*/