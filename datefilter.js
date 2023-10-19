$(document).ready(function () {
  // Add an event listener to the dateFilter input
  $("#dateFilter").on("change", function () {
    var selectedDate = $(this).val();
    filterTable(selectedDate);
  });

  function filterTable(selectedDate) {
    // Loop through each row in the table
    $("#tb tbody tr").each(function () {
      var transactionDate = $(this).find("td:nth-child(2)").text(); // Assuming the date is in the 2nd column

      // Format the transaction date to match the date input format (yyyy-mm-dd)
      var formattedTransactionDate = formatDate(transactionDate);

      if (selectedDate === formattedTransactionDate || selectedDate === "") {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  function formatDate(inputDate) {
    // Assuming the input date format is "dd/mm/yyyy"
    var parts = inputDate.split("/");
    if (parts.length === 3) {
      return parts[2] + "-" + parts[1] + "-" + parts[0];
    }
    return inputDate; // Return the original date if the format is not as expected
  }
});
