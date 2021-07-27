
$(document).ready(function () {

  $('#banner-slides').bxSlider({
    pager: false,
    auto: true,
    speed: 1000,
    mode:'fade',
    controls: false,
    pause: 4000
  });

  const clienSlider = $('#clientSlider').bxSlider({
    auto: true,
    controls: false,
    speed: 1000,
    pager: false,
    infiniteLoop: true,
  });

  $('.smsSlider').bxSlider({
    auto: true,
    controls: false,
    speed: 500,
    minSlides: 1,
    maxSlides: 10,
    moveSlides: 1,
    slideMargin:20,
    slideWidth: 150,
    pager: false,
    autoHover: true,
    pause:1000
  });

  $('#rightControl').click(function () {
    clienSlider.goToNextSlide();
    return false;
  });

  $('#leftControl').click(function () {
    clienSlider.goToPrevSlide();
    return false;
  });

  $('.nav--link').click(function () {
   $(this).next('.megamenu').slideToggle(300);
  });

  $('.closeNav').click(function () {
    $('.appnav').removeClass('open');
   });

   $('.mobileMenu').click(function () {
    $('.appnav').addClass('open');
   });

});