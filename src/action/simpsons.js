import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';

export const fetchQuote = quote => dispatch => {
  return getQuote(quote)
    .then(fact => {
      dispatch({
        type: FETCH_QUOTE,
        payload: quote
      });
    });
};