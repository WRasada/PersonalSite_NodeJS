          //************* GLOBAL JS *************//
let path = window.location.pathname;

if (path === '/about') {
  $('.navbar-default').css({ backgroundColor: "rgba(47, 93, 146, 1)" })
}
if (path === '/blog') {
  $('.navbar-default').css({ backgroundColor: "rgb(206, 59, 0)" })
}
if (path === '/portfolio') {
  $('.navbar-default').css({ backgroundColor: "rgb(138, 38, 55)" })
}
if (path === '/contact') {
  $('.navbar-default').css({ backgroundColor: "rgb(100, 0, 206)" })
}

// Fade NavBar and Landing Page Content
$('.navbar-default').fadeIn(1200, function(){
  $('#myName').fadeIn(2200, function(){
    $('#messageSeparator').animate({
      width: '40%'
    }, 1200);
    $('#myNameContent').fadeIn(800);
  });
});



          //************* BLOG JS *************//

$('#blogPage .navbar-default').fadeIn(1200, function(){
  $('.blogContainer').fadeIn(1000);
});

$('.icon').each(function(){
	$(this).on('click', function(){
	$('+ hr + h2 + .posts', this).slideToggle(1000);
 });
});
      //************* ABOUT JS *************//

$('#aboutPage .navbar-default').fadeIn(1200, function(){
  $('.aboutHeader').slideDown(1100, function(){
    $('.aboutHeader img').addClass('clip');
    setTimeout(() => {
      $(".aboutHeader p").typed({
        strings: ["Full-Stack Developer"],
        typeSpeed: 70,
        showCursor: false
      });
    }, 1000);
    $('.aboutContainer').fadeIn(800);
  });
});

$('.navbar-nav li').mouseenter(function(){
	if($(this).hasClass('active')){
  } else {
    $(this).addClass('active');
    $(this).mouseleave(function(){
      $(this).removeClass('active');
    });
  }
});

$('.navbar-nav li a').each(function () {
	if ($(this).attr('href') === window.location.pathname) {
		$(this).parent().addClass('active');
    }
})
