window.onload = function() {

  $('.logo').on('click', function() {
    var audio = new Audio(audioFile());
    audio.play();

    $('.walle .head.head-left').addClass('rotated');
    setTimeout(function() {
      $('.walle .head-right').addClass('rotated');
    }, 500);
    setTimeout(function() {
      $('.walle .head-left').removeClass('rotated');
    }, 1200);
    setTimeout(function() {
      $('.walle .head-right').removeClass('rotated');
    }, 1200);

    setTimeout(function() {
      $('.walle .head.head-left').addClass('rotated');
      $('.walle .head-right').addClass('rotated');
    }, 2200);
    setTimeout(function() {
      $('.walle .head.head-left').removeClass('rotated');
      $('.walle .head-right').removeClass('rotated');
    }, 3000);
  });

  function audioFile() {
    return Math.random() > 0.5 ? 'tahdah.wav' : 'whoa.wav'
  }

};
