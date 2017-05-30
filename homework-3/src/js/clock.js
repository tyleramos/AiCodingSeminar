$(function() {
  var strftime = require('strftime');
  var TimeZone = require('./timezone');

  var $time = $('.time');
  var $button = $('.button');

  var updateClockTime = function() {
    var offset = TimeZone.utc ? 4 : 0;
    var date = new Date( new Date().getTime() + offset * 3600 * 1000)

    $time.find('.hours').text(strftime('%l', date));
    $time.find('.minutes').text(strftime('%M', date));
    $time.find('.seconds').text(strftime('%S', date));
    $time.find('.ampm').text(strftime('%p', date));
  };

  $button.on('click', function(event) {
    event.preventDefault();
    TimeZone.change();
    $button.toggleClass('pressed');
  });

  setInterval(updateClockTime, 1000);
});
