// when we scroll X pixels, slide down the menu

//$('.bar').slideDown(2000);

//when I click the logo, open the menu

$('.logo').click (function () {
  $('.bar').addClass('exposed');

});

$(window).scroll(function () {

// determube hoq mmany pizes have been scrolled from teh top
var px = $(window).scrollTop()

console.log("Pixels scrolled: " + px);

// if the number of pixels scrolled is a full screen height, expose the manu bar
 if (px >= 953) {
   //open the menu bar
   $('.bar').addClass('exposed');
 }

 else {
   $('.bar').removeClass('exposed');
 }

});
