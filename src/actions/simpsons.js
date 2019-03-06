import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const fetchQuote = dispatch => {
  return getQuote()
    .then(quote => {
      dispatch({
        type: FETCH_QUOTE,
        payload: quote
      });
    });
};

