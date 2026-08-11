import { GenerateRandomInt } from '../utils/math.js';
import { handleFavorite } from './favorite.js';

function handleQuote(quotes, setCurrentQuote) {
  const randomeQuote = choseRandomQuote(quotes);
  setCurrentQuote(randomeQuote);
  displayQuote(randomeQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = GenerateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
