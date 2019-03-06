import { FETCH_QUOTE } from '../actions/simpsons';

const initialState = {
  quote: 'Starting quote',
  characterName: 'Starting Name',
  characterImage: 'Starting URL'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: action.payload.quote,
        characterName: action.payload.character,
        characterImage: action.payload.image
      };
    default:
      return state;
  }
}
