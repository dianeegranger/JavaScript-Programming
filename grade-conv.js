/*
* Diane E. Granger
* dianeegranger@gmail.com
* github.com/dianeegranger
*
* JavaScript
* Take 5 different subject scores
* Calculate the corresponding percentage grade
* Convert the percentage grade to the corresponding letter grade.
******************************************************************/

const prompt = require('prompt-sync')();

let letterGrade = function(percentGrade) {
  let letter;  // declaration of letter

  switch (true) {
    case (percentGrade >= 90):
      letter = 'A';
      break;
    case (percentGrade >= 80):
      letter = 'B';
      break;
    case (percentGrade >= 70):
      letter = 'C';
      break;
    case (percentGrade >= 60):
      letter = 'D';
      break;
    default:
      letter = 'F';
      break;
  }
  return letter;
};

// calculate percentage grade
let percentGrade = function(grade, total) {
  return percent = ((grade / total * 100).toFixed(2));
};

// Request score and totalScore from user
let score = prompt("Enter score: ");
let totalScore = prompt("Enter totalScore: ");

const subjectPercent = percentGrade(score, totalScore);
let subjectLetter = letterGrade(subjectPercent);

console.log(`Your subject grade is:  ${subjectLetter} (${subjectPercent}%)`);
/*
OUTPUT:
PS C:\JS> node "c:\JS\grade-conv.js"
Enter score: 92
Enter totalScore: 100
Your subject grade is:  A (92.00%)

PS C:\JS> node "c:\JS\grade-conv.js"
Enter score: 85
Enter totalScore: 100
Your subject grade is:  B (85.00%)

PS C:\JS> node "c:\JS\grade-conv.js"
Enter score: 75
Enter totalScore: 100
Your subject grade is:  C (75.00%)

PS C:\JS> node "c:\JS\grade-conv.js"
Enter score: 66
Enter totalScore: 100
Your subject grade is:  D (66.00%)

PS C:\JS> node "c:\JS\grade-conv.js"
Enter score: 59
Enter totalScore: 100
Your subject grade is:  F (59.00%)
*/