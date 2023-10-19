document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demonstration

    // Get the entered username and password
    // const username = document.querySelector('input[type="text"]').value;
    const username = document.getElementById("addUserName").value;
    const password = document.getElementById("passwordField").value;

    // Check if the username and password match
    if (username === "12345" && password === "12345") {
      // Redirect to the dashboard page or perform further actions for authenticated users
      window.location.href = "index.html";
    } else {
      // Display an error message for incorrect username or password
      document.getElementById("errorMessage").style.display = "block";
    }
  });
