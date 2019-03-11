import { FETCH_QUOTE } from '../actions/simpsons';

const initialState = {
  quote: '',
  characterName: '',
  characterImage: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE:
      return { ...state, quote: payload, characterImage: payload, characterName: payload };
    default:
      return state;
  }
}
