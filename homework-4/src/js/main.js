import $ from 'jquery';
import Storage from './storage';

$(() => {

  const listName = 'quotes';
  const $list = $('ul.quotes');

  function appendQuote(quote) {
    $list.append(`<li>${quote}</li>`);
  }

  function refreshList() {
    $list.html('');
    const quotes = Storage.load(listName);
    for (let quote of quotes) {
      appendQuote(quote);
    }
  }

  $('form').on('submit', (e) => {
    e.preventDefault();
    const $input = $('form input[name="quote-input"]')
    const newQuote = $input.val();
    $input.val('');
    Storage.add(listName, newQuote);
    appendQuote(newQuote);
  });

  $('.clear').on('click', (e) => {
    Storage.empty(listName);
    refreshList();
  });

  refreshList();
});
