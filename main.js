// water animation

$(function () {
  let a = 0;
  $(window).scroll(function () {
    let oTop = $('.major').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      console.log($('.major:nth-child(2) .wave'));
      $('.major:first-child .wave').animate({ top: '18%' }, 1000);
      $('.major:nth-child(2) .wave').animate({ top: '19%' }, 1000);
      $('.major:nth-child(3) .wave').animate({ top: '24%' }, 1000);
      $('.wave').addClass('waveAni');
    }
  });
});
