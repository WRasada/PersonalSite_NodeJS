          //************* GLOBAL JS *************//
let path = window.location.pathname;

$('.navbar-default').fadeIn(1200, function(){
  $('.blogContainer').fadeIn(1000);
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

$('.navbar-default').css({ backgroundColor: "rgb(206, 59, 0)" });
$('footer').css({ backgroundColor: "rgb(206, 59, 0)" });


setTimeout(() => {
  $('footer').fadeIn(800);
}, 2500);

setTimeout(() => {
  $('#myNameContent').fadeIn(1000, () => {
    $('#myNameContent').addClass('clip');
    setTimeout(() => {
      $('#myNameContent a').css({ visibility: 'visible'}).addClass('animated zoomInDown');
      setTimeout(() => {
        $('#myNameContent a').removeClass('zoomInDown').addClass('animated infinite bounce');
      }, 1000);
    }, 1400);
  });
}, 300)

$('#myNameContent a').on('click', function() {
  $(this).removeClass('infinite bounce').addClass('hinge');
  setTimeout(() => {
    window.location.href = "http://localhost:3000/about";
  }, 2200);
})


//************* BLOG JS *************//

if (path === '/blog') {

  $('.navbar-default').css({ backgroundColor: "rgb(206, 59, 0)" })
  $('footer').css({ backgroundColor: "rgb(206, 59, 0)" })

  $('.navbar-default').fadeIn(1200, function(){
    $('.blogContainer').fadeIn(1000);
  });
}

//************* ABOUT JS *************//

if (path === '/about') {

  $('.navbar-default').css({ backgroundColor: "rgba(47, 93, 146, 1)" });
  $('footer').css({ backgroundColor: "rgba(47, 93, 146, 1)" });

  $('.navbar-default').fadeIn(1200, function(){
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
          $('#progressBarJS').css({ width: '42%' });
          $('#progressBarjQuery').css({ width: '23%' });
          $('#progressBarNode').css({ width: '32%' });
          $('#progressBarMongo').css({ width: '29%' });
          $('#progressBarExpress').css({ width: '35%' });
          $('#progressBarHTML').css({ width: '33%' });
          $('#progressBarCSS').css({ width: '33%' });
          $('#progressBarRuby').css({ width: '16%' });
          $('#progressBarRails').css({ width: '13%' });
        }, 1000);
      });
    });
  });
}

//************* PORTFOLIO JS *************//

if (path === '/portfolio') {

  $('.navbar-default').css({ backgroundColor: "rgb(138, 38, 55)" })
  $('footer').css({ backgroundColor: "rgb(138, 38, 55)" })
  $('.portfolioHeader').css({
    background: "-webkit-linear-gradient(rgb(195, 32, 60), rgb(156, 24, 47)",
    background: "-o-linear-gradient(rgb(195, 32, 60), rgb(156, 24, 47)",
    background: "linear-gradient(rgb(195, 32, 60), rgb(156, 24, 47)"
  });
  $('.navbar-default').fadeIn(1200, function(){
    $('.portfolioHeader').slideDown(1100, () => {
      $(".portfolioHeader h2").typed({
        strings: ["PROJECTS"],
        typeSpeed: 70,
        showCursor: false
      });
      $('.page1').fadeIn(900);
      $('.pageCenter').fadeIn(900);
    });
  });

  $('.pageOne').on('click', () => {
    $('.pageTwo').removeClass('active');
    $('.pageOne').addClass('active');
    $('.page2').hide();
    $('.page1').show();
  });

  $('.pageTwo').on('click', () => {
    $('.pageOne').removeClass('active');
    $('.pageTwo').addClass('active');
    $('.page1').hide();
    $('.page2').show();
  });
}

//***************** CONTACT JS *****************//

if (path === '/contact') {

  $('.navbar-default').css({ backgroundColor: "rgb(19, 201, 125)" });
  $('footer').css({ backgroundColor: "rgb(19, 201, 125)" });

  $('.contactHeader').css({
    background: "-webkit-linear-gradient(rgb(13, 224, 136), rgb(19, 201, 125)",
    background: "-o-linear-gradient(rgb(13, 224, 136), rgb(19, 201, 125)",
    background: "linear-gradient(rgb(13, 224, 136), rgb(19, 201, 125)"
  });

  $('.navbar-default').fadeIn(1200, function(){
    $('.contactHeader').slideDown(1100, () => {
      $(".contactHeader h2").typed({
        strings: ["Contact Me"],
        typeSpeed: 70,
        showCursor: false
      });
      $('.contactForm').fadeIn(1100);
    });
  });
}
