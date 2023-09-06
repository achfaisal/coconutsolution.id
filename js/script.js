$(document).ready(function () {
  // Check if the user has scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      // Add the 'transparent' class when scrolled down
      $(".custom-navbar").addClass("transparent");
    } else {
      // Remove the 'transparent' class when scrolled to the top
      $(".custom-navbar").removeClass("transparent");
    }
  });
});
