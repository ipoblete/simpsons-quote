import { fetchInfo } from '../services/simpsonsApi';

export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const updateQuote = quote => ({
  type: UPDATE_QUOTE,
  payload: quote
});

export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name
});

export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const updateImage = image => ({
  type: UPDATE_IMAGE,
  payload: image
});

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = () => ({
  type: FETCH_FACTS,
  payload: fetchInfo
});
