$(document).ready(function() {
  $('#hamburger').click(function() {
    if ($('.navbar').hasClass('open-menu')) {
      // This is meant to prevent the <ul> from dissapearing at oncce on click, but doesn't work
      // Chaining doesn't work not setTimeout
      $('.navbar').slideUp('slow');
      setTimeout($('.navbar').removeClass('open-menu'), 1500);
    } else {
      $('.navbar').addClass('open-menu').slideDown('slow');
    }

  });
  $(window).resize(function() {
    $('.navbar').removeClass('open-menu');
    var width = $(window).width();
    if (width > 950) {
      $('.navbar').css('display', 'block');
    } else {
      $('.navbar').css('display', 'none');
    }
  });
});

