// Name of bg-images
var bgImages = ['hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg', 'hero-4.jpg', 'hero-5.jpg'];
// img-directory
var baseURL = './img/';
// Preloads the images so there is no flicker in the first 'round'
bgImages.forEach(function(img) {
  new Image().src = baseURL + img;
// caches images, avoiding white flash between background replacements
});
// Interval for background image change
var secs = 15;


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
