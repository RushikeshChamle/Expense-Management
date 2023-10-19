function initializeChart() {
  var currentCredit = parseFloat(document.getElementById("crex").innerHTML);
  var currentDebit = parseFloat(document.getElementById("debex").innerHTML);

  let xValues = ["Credit", "Debit"];
  let yValues = [currentCredit, currentDebit];

  const barColors = ["#00aba9", "#b91d47"];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Transaction Classification",
      },
    },
  });
}
initializeChart();
