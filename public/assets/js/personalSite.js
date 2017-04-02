          //************* GLOBAL JS *************//
let path = window.location.pathname;

if (path === '/about') {
  $('.navbar-default').css({ backgroundColor: "rgba(47, 93, 146, 1)" })
  $('footer').css({ backgroundColor: "rgba(47, 93, 146, 1)" })
}
if (path === '/blog') {
  $('.navbar-default').css({ backgroundColor: "rgb(206, 59, 0)" })
  $('footer').css({ backgroundColor: "rgb(206, 59, 0)" })
}
if (path === '/portfolio') {
  $('.navbar-default').css({ backgroundColor: "rgb(138, 38, 55)" })
  $('footer').css({ backgroundColor: "rgb(138, 38, 55)" })
  $('.portfolioHeader').css({
    background: "-webkit-linear-gradient(rgb(195, 32, 60), rgb(156, 24, 47)",
    background: "-o-linear-gradient(rgb(195, 32, 60), rgb(156, 24, 47)",
    background: "linear-gradient(rgb(195, 32, 60), rgb(156, 24, 47)"
  });
}
if (path === '/contact') {
  $('.navbar-default').css({ backgroundColor: "rgb(100, 0, 206)" })
  $('footer').css({ backgroundColor: "rgb(100, 0, 206)" })
}

setTimeout(() => {
  $('footer').fadeIn(800);
}, 3000);
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

// Fade NavBar and Landing Page Content
$('.navbar-default').fadeIn(1200, function(){
  $('#myName').fadeIn(2200, function(){
    $('#messageSeparator').cs({
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

setTimeout(() => {
  $('.aboutHeader').slideDown(1100, function(){
    $('.aboutHeader img').addClass('clip');
    setTimeout(() => {
      $(".aboutHeader p").typed({
        strings: ["Full-Stack Developer"],
        typeSpeed: 70,
        showCursor: false
      });
    }, 1700);
    $('.aboutContainer').fadeIn(800, () => {
      setTimeout(() => {
        $('#progressBarJS').css({ width: '49%' });
        $('#progressBarjQuery').css({ width: '30%' });
        $('#progressBarNode').css({ width: '39%' });
        $('#progressBarMongo').css({ width: '36%' });
        $('#progressBarExpress').css({ width: '42%' });
        $('#progressBarHTML').css({ width: '40%' });
        $('#progressBarCSS').css({ width: '40%' });
        $('#progressBarRuby').css({ width: '22%' });
        $('#progressBarRails').css({ width: '19%' });
      }, 1000);
    });
  });
}, 1300);


        //************* PORTFOLIO JS *************//

setTimeout(() => {
  $('.portfolioHeader').slideDown(1100, () => {
    $(".portfolioHeader h2").typed({
      strings: ["Projects"],
      typeSpeed: 70,
      showCursor: false
    });
    setTimeout(() => {
      $('.page1').fadeIn(900);
      $('.pageCenter').fadeIn(900);
    }, 500);
  });
}, 1300);

$('.pageOne').on('click', () => {
  $('.page2').hide();
  $('.page1').show();
});

$('.pageTwo').on('click', () => {
  $('.page1').hide();
  $('.page2').show();
});
