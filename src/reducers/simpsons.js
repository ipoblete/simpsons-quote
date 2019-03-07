import { FETCH_QUOTE } from '../action/simpsons';

const initalState = {
  quote: '',
  characterName: '',
  characterImage: '',
};

export default function reducer(state = initalState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE:
      return { ...state, quote: payload.quote, characterName: payload.character, characterImage: payload.image };
    default:
      return state;
  }
}
