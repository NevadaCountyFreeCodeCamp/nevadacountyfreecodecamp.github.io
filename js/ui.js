function openNav() {
  $('.sidenav').addClass('sidenav-open');
  $('#main').addClass('move-right');
  $('#hamburger').hide();
  // close on ESC-key
  document.onkeydown = function(e) {
    e = e || window.event;
    console.log(e.keyCode);
    if (e.keyCode == 27) {
      closeNav();
    }
  };
  $('#main').click(function() {
    closeNav();
  });
}

function closeNav() {
  // Do I need to remove the onkeydown event from above?
  $('.sidenav').removeClass('sidenav-open');
  $('#main').removeClass('move-right');
  $('#hamburger').show();

}

