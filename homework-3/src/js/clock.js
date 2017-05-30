$(function() {
  var strftime = require('strftime');

  var $time = $('.time');
  var $button = $('.button');

  var utc = false;

  var updateClockTime = function() {
    var offset = utc ? 4 : 0;
    var date = new Date( new Date().getTime() + offset * 3600 * 1000)

    $time.find('.hours').text(strftime('%l', date));
    $time.find('.minutes').text(strftime('%M', date));
    $time.find('.seconds').text(strftime('%S', date));
    $time.find('.ampm').text(strftime('%p', date));
  };

  var changeTimeZone = function() {
    utc = !utc;
    $button.toggleClass('pressed');
  };

  $button.on('click', function(event) {
    event.preventDefault();
    changeTimeZone();
  });

  setInterval(updateClockTime, 1000);
});
