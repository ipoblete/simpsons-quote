import { getQuoteInfo } from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTES_LOADING = 'FETCH_QUOTES_LOADING';
export const fetchQuote = () => ({
  type: FETCH_QUOTE,
  loadStart: FETCH_QUOTES_LOADING,
  payload: getQuoteInfo()
});


