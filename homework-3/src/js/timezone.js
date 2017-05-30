const TimeZone = {
  utc: false,
  change: function() {
    TimeZone.utc = !TimeZone.utc;
  }
}

module.exports = TimeZone;
