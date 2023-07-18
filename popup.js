window.addEventListener('DOMContentLoaded', function () {
    const nepaliDateElement = document.getElementById('nepali-date');
  
    function getNepaliDate() {
      const today = new Date();
      const nepaliDate = new NepaliDate(today);
  
      const formattedDate = nepaliDate.format('dddd, DD MMMM YYYY', 'np');
      const sanitizedDate = formattedDate.replace('२,', ','); // Remove the digit "२" followed by comma
  
      return sanitizedDate;
    }
  
    // Display today's Nepali date on page load
    const nepaliDate = getNepaliDate();
    nepaliDateElement.innerText = nepaliDate;
  });
  