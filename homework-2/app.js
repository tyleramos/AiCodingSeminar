$(function() {

  var $button = $('button');


  var shuffleDeckAndDrawCard = function() {
    var shuffleURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    $.ajax({ url: shuffleURL })
    .then(function(data) {
      drawCard(data.deck_id);
    }).catch(function(err) {
      console.log('Error occurred when shuffling deck!');
      console.log(err);
    });
  };

  var drawCard = function(deckId) {
    var drawURL = 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=2';
    $.ajax({ url: drawURL })
    .then(function(data) {
      $('.card img.target').prop('src', data.cards[0].image);
    }).catch(function(err) {
      console.log('Error occurred when drawing card!');
      console.log(err);
    });
  };

  $button.on('click', function(event) {
    event.preventDefault();
    shuffleDeckAndDrawCard();
  });

});
