import { FETCH_QUOTE } from '../action/simpsons';

const initialState = {
  quote: 'some quote',
  characterName: 'Bart',
  characterImage: 'link to image'
 };

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE:
      return { ...state, getQuote: payload };
    default:
      return state;
  }
}