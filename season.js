/*
* Diane E. Granger
* dianeegranger@gmail.com
* github.com/dianeegranger
*
* JavaScript
* Determine the season based on the month entered by user
************************************************************************/

const prompt = require('prompt-sync')();

// Request month from user and convert it to lowercase
let month = prompt('Enter a month (January - December): ').toLowerCase();

// Declare season variable
let season;

switch (month) {
  //January, February, March
  case "january":
  case "february":
  case "march":
    season = "Winter";
    break;
  
  // April, May, June
  case "april":
  case "may":
  case "june":
    season = "Spring";
    break;
  
  // July, August, September
  case "july":
  case "august":
  case "september":
    season = "Summer";
    break;
  
  // October, November, December
  case "october":
  case "november":
  case "december":
    season = "Fall";
    break;

  default:
    season = "Invalid input";
}

// Display season 
//console.log(`Month: ${month}   Season: ${season}`);

console.log(`Month: ${month[0].toUpperCase() + month.slice(1)}   Season: ${season}`);

/*
OUTPUT:
PS C:\JS-Essentials> node "c:\JS-Essentials\season.js"
Enter a month (January - December): March
Month: March   Season: Winter

PS C:\JS-Essentials> node "c:\JS-Essentials\season.js"
Enter a month (January - December): May
Month: May   Season: Spring

PS C:\JS-Essentials> node "c:\JS-Essentials\season.js"
Enter a month (January - December): July
Month: July   Season: Summer

PS C:\JS-Essentials> node "c:\JS-Essentials\season.js"
Enter a month (January - December): October
Month: October   Season: Fall
*/