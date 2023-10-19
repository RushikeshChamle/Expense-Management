function openPaymentModal() {
  document.getElementById("paymentModal").style.display = "block";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
}

function submitPayment() {
  var selectedCategory = document.getElementById("category").value;
  var enteredValue = parseFloat(document.getElementById("number").value);

  console.log("Selected category:", selectedCategory);
  console.log("Entered value:", enteredValue);

  if (selectedCategory === "debit") {
    var currentDebexValue = parseFloat(
      document.getElementById("debex").innerHTML
    );
    console.log("Current debex value:", currentDebexValue);

    var newTotal = currentDebexValue + enteredValue;
    console.log("New total for debex:", newTotal);

    document.getElementById("debex").innerHTML = newTotal;
  } else if (selectedCategory === "credit") {
    var currentCrexValue = parseFloat(
      document.getElementById("crex").innerHTML
    );
    console.log("Current crex value:", currentCrexValue);

    var newTotal = currentCrexValue + enteredValue;
    console.log("New total for crex:", newTotal);

    document.getElementById("crex").innerHTML = newTotal;
  }
  initializeChart();
  document.getElementById("number").value = "";
  closePaymentModal();
}
