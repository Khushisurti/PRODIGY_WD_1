$(document).ready(function() {
    // Change navbar background on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#navbar').addClass('navbar-scrolled');
      } else {
        $('#navbar').removeClass('navbar-scrolled');
      }
    });
  });
  