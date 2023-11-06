document.addEventListener("DOMContentLoaded", function () {
  // Chat widget
  const chatWidget = document.getElementById("chat-widget");
  const mainButton = chatWidget.querySelector(".main-button");
  const closeButton = chatWidget.querySelector(".close-button");
  const options = chatWidget.querySelector(".options");

  mainButton.addEventListener("click", function () {
    mainButton.style.display = "none";
    closeButton.style.display = "block";
    options.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    mainButton.style.display = "block";
    closeButton.style.display = "none";
    options.style.display = "none";
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Add the 'transparent' class when scrolled down
      document.querySelectorAll(".custom-navbar").forEach(function (el) {
        el.classList.add("transparent");
        el.classList.add("small-navbar");
      });
      // Logo padding when window scrolled
      document.querySelectorAll(".logo-main").forEach(function (el) {
        el.classList.add("logo-scroll");
      });
      // Hamburger
      document.querySelectorAll("#hamburger-bar").forEach(function (el) {
        el.classList.add("hamburger-scroll");
      });
    } else {
      // Remove the 'transparent' class when scrolled to the top
      document.querySelectorAll(".custom-navbar").forEach(function (el) {
        el.classList.remove("transparent");
        el.classList.remove("small-navbar");
      });
      // Logo padding when window scrolled
      document.querySelectorAll(".logo-main").forEach(function (el) {
        el.classList.remove("logo-scroll"); // Add your new class
      });
      document.querySelectorAll("#hamburger-bar").forEach(function (el) {
        el.classList.remove("hamburger-scroll");
      });
    }
  });

  // Select the dropdown element by its id
  let dropdownElement = document.getElementById("dropdown");

  // Function to update the uk-dropdown attribute value based on scroll position
  function updateDropdownOffset() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Set the desired offset value based on the scroll position
    let offsetValue = 0; // Default offset value
    if (scrollPosition > 50) {
      offsetValue = -20; // Change the offset value when scroll position is greater than 100 pixels
    }

    // Update the uk-dropdown attribute with the new offset value
    dropdownElement.setAttribute("uk-dropdown", "offset:" + offsetValue);
  }

  // Attach the scroll event listener to the window
  window.addEventListener("scroll", updateDropdownOffset);
});
