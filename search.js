document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("tb");
  const tableSearch = document.getElementById("tableSearch");

  tableSearch.addEventListener("input", function () {
    const searchValue = tableSearch.value.toLowerCase();
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const cell = row.querySelector("td:nth-child(3)");
      if (cell) {
        const text = cell.textContent.toLowerCase();
        if (text.includes(searchValue)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });
  });
});
