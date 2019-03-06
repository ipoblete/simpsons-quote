import { FETCH_QUOTE } from '../actions/simpsons';

const inititalState = {
  quote: 'Starting quote',
  characterName: 'Starting Name',
  characterImage: 'Starting URL'
};

export default function reducer(state = inititalState, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: action.payload.quote,
        characterName: action.payload.character,
        image: action.payload.image
      };
    default:
      return state;
  }
}
