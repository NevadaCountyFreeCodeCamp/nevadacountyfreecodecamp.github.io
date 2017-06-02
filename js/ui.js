$(document).ready(function() {
  $('#hamburger').click(function() {
    $('.navbar').toggleClass('open-menu');
    $('.navbar').slideToggle('slow');
  });
});
