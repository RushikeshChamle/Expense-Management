// Get the button element
const addCardButton = document.getElementById("addcard");

// Get the card image element
const cardImage = document.getElementById("card");

// Get the file input element
const imageUpload = document.getElementById("imageUpload");

// Add a click event listener to the button
addCardButton.addEventListener("click", function () {
  // Trigger a click on the file input when the button is clicked
  imageUpload.click();
});

// Add a change event listener to the file input
imageUpload.addEventListener("change", function () {
  const file = imageUpload.files[0]; // Get the selected file
  if (file) {
    const newCardImageSrc = URL.createObjectURL(file); // Create a URL for the selected image
    cardImage.src = newCardImageSrc; // Change the card image to the newly uploaded image
  }
});
