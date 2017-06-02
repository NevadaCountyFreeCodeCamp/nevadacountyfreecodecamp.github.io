function openNav() {
  $('.sidenav').addClass('sidenav-open');
  $('#main').addClass('move-right');
  $('#hamburger').hide();
  document.onkeydown = function(e) {
    e = e || window.event;
    console.log(e.keyCode);
    if (e.keyCode == 27) {
      closeNav();
    }
  };
}

function closeNav() {
  $('.sidenav').removeClass('sidenav-open');
  $('#main').removeClass('move-right');
  $('#hamburger').show();

}

