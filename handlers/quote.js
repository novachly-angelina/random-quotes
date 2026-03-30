import quotes from '../data/quotes.js';
import { GenerateRandomInt } from '../src/utils.js';
import { handleFavorite } from './favorite.js';

let currentQuote = null;

function handleQuote() {
  const randomeQuote = choseRandomQuote(quotes);
  currentQuote = randomeQuote;
  displayQuote(randomeQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = GenerateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, currentQuote };
