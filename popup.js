

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
    var nepaliDate = NepaliFunctions.AD2BS(date.getFullYear(), date.getMonth() + 1, date.getDate());
  
    // Extract the Nepali year, month, and day
    var bsYear = nepaliDate.bsYear;
    var bsMonth = nepaliDate.bsMonth;
    var bsDay = nepaliDate.bsDate;
  
    // Format the Nepali date string
    var nepaliDateStr = bsDay + " " + getNepaliMonthName(bsMonth) + " " + bsYear;
  
    // Return the converted Nepali date
    return nepaliDateStr;
  }
  
  function getNepaliMonthName(month) {
    var nepaliMonths = [
      "Baishakh", "Jestha", "Ashadh", "Shrawan",
      "Bhadra", "Ashwin", "Kartik", "Mangsir",
      "Poush", "Magh", "Falgun", "Chaitra"
    ];
  
    return nepaliMonths[month - 1];
  }
  