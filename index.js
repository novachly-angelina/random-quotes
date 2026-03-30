import quotes from './data/quotes.js';
import { handleQuote } from './handlers/quote.js';

export let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>  handleQuote(quotes, setCurrentQuote));
