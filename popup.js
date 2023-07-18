const NepaliDate = require('nepali-date-converter');


document.addEventListener("DOMContentLoaded", function() {
    // Get the current date in AD
    var currentDateAD = new Date();
  
    // Convert the current date to Nepali date using the "nepali-date-converter" library
    var currentNepaliDate = convertToNepaliDate(currentDateAD);
  
    // Display the Nepali date in the popup.html
    document.getElementById("nepali-date").textContent = currentNepaliDate;
  });
  
  function convertToNepaliDate(date) {
    // Convert AD (Gregorian) date to Nepali date
    var nepaliDate = NepaliFunctions.AD2BS(date);
  
    // Extract the Nepali year, month, and day
    var bsYear = nepaliDate.bsYear;
    var bsMonth = nepaliDate.bsMonth;
    var bsDay = nepaliDate.bsDate;
  
    // Format the Nepali date string
    var nepaliDateStr = bsDay + " " + NepaliFunctions.getFullMonth(bsMonth) + " " + bsYear;
  
    // Return the converted Nepali date
    return nepaliDateStr;
  }
  