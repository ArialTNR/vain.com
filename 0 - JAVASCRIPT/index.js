$(function() {
    $('.scroll-down-button').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'smooth');
      return false;
    });
  });