$(document).ready(function() {
  $('#showcase').css({'background-image': 'url(/assets/images/showcase/' + (Math.floor(Math.random() * 7)) + '.jpg)'});

  $('#read_more').click(function () {
    $('html, body').animate({
        scrollTop: $('#welcome').offset().top
    }, 1000);
  });

  $('#nav_toggle').click(function() {
    var element = $('#navbar > .content');

    if(element.hasClass('collapsed')) {
      element.slideDown('fast');
    } else {
      element.slideUp('fast');
    }

    element.toggleClass('collapsed');
  });
});
