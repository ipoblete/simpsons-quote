import { getQuote } from '../services/simpsonsApi';
export const FETCH_QUOTE = 'FETCH_QUOTE';

export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING';
export const getQuotePromise = () => ({
    type: FETCH_QUOTE,
    payload: getQuote()
});
