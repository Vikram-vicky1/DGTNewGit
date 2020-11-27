$(function () {
    'use strict'

  $("[data-trigger]").on("click", function(){
      var trigger_id =  $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function(event) {
      if(event.keyCode === 27) {
         $(".navbar-collapse").removeClass("show");
         $("body").removeClass("overlay-active");
      }
  });

  // close button 
  $(".btn-close").click(function(e){
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  }); 


});


(function() {

    var iframes, locked = null;
    window.addEventListener("scroll", scroll, true);
    
    function scroll(e) {
    
      if (!locked) {
        iframes = document.querySelectorAll('iframe');
        lock('none');
      }
    
      clearTimeout(locked);
      locked = setTimeout(function() {
        locked = null;
        lock('auto');
      }, 100);
    
    }
    
    function lock(value) {
      for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.pointerEvents = value;
      }
    }
    
    })();



    
// $('#productsList').click(function () {
//   $('#fullpage').toggleClass('overlay');
// });
// $('#fullpage').click(function(){
//   $('section').addClass('overlay2');
// });

$('video').each(function(){
  if ($(this).is(":in-viewport")) {
      $(this)[0].play();
  } else {
      $(this)[0].pause();
  }
})



$(document).ready(function(){
  $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("ul .nav-link").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".card p").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});


// mobile swipe up and left
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;                                                        
var yDown = null;  

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
}; 

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
        /* left swipe */ 
        } else {
        /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
        /* up swipe */ 
        } else { 
        /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};