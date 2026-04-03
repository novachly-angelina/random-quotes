import quotes from './data/quotes.js';
import { handleQuote } from './handlers/quote.js';
import {toggleFavorite, hideFavoriteBtn} from './handlers/favorite.js';

export let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}


const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn()
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer),
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote),
);


export {quoteFavoriteBtn}