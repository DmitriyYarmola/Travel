$(document).ready(function () {

  var caruselSecond = $('#carusel2');

  var btnNext = caruselSecond.children('.next');
  var btnPrev = caruselSecond.children('.previous');

  var btnNextTwo = $('#carusel4').children('.next');
  var btnPrevTwo = $('#carusel4').children('.previous');

  var travelInner = $(".travel-inner");
  var travelContent = $(".travel-content");
  var travelItem = $(".travel-item");

  var burger = $(".burger-obj");
  var burgerV = $(".burger");
  var nav = $(".mobile-nav");
  var body = $("body");

  var videoActive = $('#video-active');

  var passiveItem = $('[data-passive]');

  var dataActive = videoActive.find('.test').data('src');

  //slider https://flickity.metafizzy.co/
  $('.carusel').flickity({
  });


  

  btnNext.on("click", function () {

    if ($(".two").hasClass('test')) {
      $(".two").removeClass("test");
      $(".three").addClass("test");

    } else if ($(".three").hasClass("test")) {
      $(".three").removeClass("test");
      $(".one").addClass("test");
    } else if ($(".one").hasClass("test")) {
      $(".one").removeClass("test");
      $(".two").addClass("test");
    }

  });

  btnNextTwo.on("click", function () {

    if ($(".carusel4-two").hasClass('test')) {
      $(".carusel4-two").removeClass("test");
      $(".carusel4-three").addClass("test");

    } else if ($(".carusel4-three").hasClass("test")) {
      $(".carusel4-three").removeClass("test");
      $(".carusel4-one").addClass("test");
    } else if ($(".carusel4-one").hasClass("test")) {
      $(".carusel4-one").removeClass("test");
      $(".carusel4-two").addClass("test");
    }

  });

  btnPrev.on("click", function () {

    if ($(".two").hasClass('test')) {
      $(".two").removeClass("test");
      $(".one").addClass("test");

    } else if ($(".three").hasClass("test")) {
      $(".three").removeClass("test");
      $(".two").addClass("test");
    } else if ($(".one").hasClass("test")) {
      $(".one").removeClass("test");
      $(".three").addClass("test");
    }

  });



  btnPrevTwo.on("click", function () {

    if ($(".carusel4-two").hasClass('test')) {
      $(".carusel4-two").removeClass("test");
      $(".carusel4-one").addClass("test");

    } else if ($(".carusel4-three").hasClass("test")) {
      $(".carusel4-three").removeClass("test");
      $(".carusel4-two").addClass("test");
    } else if ($(".one").hasClass("test")) {
      $(".carusel4-one").removeClass("test");
      $(".carusel4-three").addClass("test");
    }

  });

  $(window).on("resize load", function() {
    if ( $(window).width() <= 1300 ) {
      travelInner.append(travelItem);
    }
  });

  //Slider https://kenwheeler.github.io/slick/
  $('.block-carusel').slick();

  //Slider video

  passiveItem.on('click', function () {

    var thisBlock = $(this).find('.passive-img').data('test');
    var thisPost = $(this).find('.passive-img').attr('src');

    videoActive.find('video').attr('src', thisBlock);
    videoActive.find('video').attr('poster', thisPost);

  });

  //Burger

  

  burger.on("click", function () {
    burgerV.toggleClass("burger-icon");
    nav.toggleClass("nav-active");
    body.toggleClass('body');

  });
});
