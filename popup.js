window.addEventListener('DOMContentLoaded', function () {
  const nepaliDateElement = document.getElementById('nepali-date');

  function getNepaliDate() {
    const today = new Date();
    const nepaliDate = new NepaliDate(today);

    const formattedDate = nepaliDate.format('dddd, DD MMMM YYYY', 'np');
    const sanitizedDate = formattedDate.replace(/([०१२३४५६७८९]),/g, ',');

    return sanitizedDate;
  }

  // Display today's Nepali date on page load
  nepaliDateElement.textContent = getNepaliDate();
});