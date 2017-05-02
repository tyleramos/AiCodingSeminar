$(function() {

  var $form = $('form');

  var validateMathInput = function(errors) {
    var value = $('input#input-math').val();
    if (value === '') {
      errors.push('An answer is required for "2 + 3 = ?".');
    } else if (value != '5') {
      errors.push('Math is hard, but 2 + 3 does not equal ' + value + '.');
    }
  };

  var validateAmphibianInput = function(errors) {
    var value = $('select#select-amphibian').val();
    if (value === '') {
      errors.push('An answer is required for "Which one is an amphibian?".');
    } else if (value !== 'frogs') {
      errors.push(value + ' is not an amphibian.');
    }
  };

  var validateColorInput = function(errors) {
    var value = $('input[name="input-color"]:checked').val();
    if (value === undefined) {
      errors.push('An answer is required for "Favorite Color?".');
    }
  };

  var validateCheckMeInput = function(errors) {
    if (!$('input#check-me').is(':checked')) {
      errors.push('Please select the "Check Me" checkbox.');
    }
  };

  var validateForm = function() {
    var errors = [];
    validateMathInput(errors);
    validateAmphibianInput(errors);
    validateColorInput(errors);
    validateCheckMeInput(errors);

    if (errors.length == 0) {
      $('.form-image.good-form').show();
      $('.form-image.bad-form').hide();
      console.log('VALID');
    } else {
      $('.form-image.good-form').hide();
      $('.form-image.bad-form').show();
      alert('Please correct the following errors:\n' + errors.join('\n'));
    }
  };

  $form.on('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

});
