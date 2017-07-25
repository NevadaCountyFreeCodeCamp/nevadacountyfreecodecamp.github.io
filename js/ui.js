// Name of bg-images
var bgImages = ['yuba.jpg', '1.jpg', '2.jpg', '3.jpg'];
// img-directory
var baseURL = './img/';
// Interval for background image change
var secs = 10;


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
  // close on click anywhere outside of nav
  $('#main').click(function() {
    closeNav();
  });
}

function closeNav() {
  // TODO: Do I need to remove the onkeydown event from above?
  $('.sidenav').removeClass('sidenav-open');
  $('#main').removeClass('move-right');
  $('#hamburger').show();
}

// ROATING BG-IMAGES

function changeBgImage() {
  window.clearTimeout();
  var k = 0;
  for (i = 0; i < bgImages.length; i++) {
    setTimeout(function() {
      console.log('image change ', i, ' url ', baseURL + bgImages[k]);
      // FIXME: Can't seem to use $, even with $(document).ready, works fine with plain JS though
      document.getElementById('banner').style.background = 'url(' + baseURL + bgImages[k] + ') no-repeat ';
      document.getElementById('banner').style.backgroundSize = "cover";
      if ((k + 1) === bgImages.length) {
        setTimeout(function() {
          changeBgImage();
        }, (secs * 1000));
      } else {
        k++;
      }
    }, (secs * 1000) * i);
  }
}

changeBgImage();