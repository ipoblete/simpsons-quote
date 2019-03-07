import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTES_LOADING = 'FETCH_FACTS_LOADING';
export const FETCH_QUOTE = 'FETCH_QUOTE';

export const fetchQuote = () => ({
  type: FETCH_QUOTE,
  loadStart: FETCH_QUOTES_LOADING,
  payload: getQuote()
});


