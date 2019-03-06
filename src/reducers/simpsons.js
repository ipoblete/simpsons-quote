import { FETCH_QUOTE } from '../actions/simpsons';

const initialState = {
  quote: '',
  characterName: '',
  characterImage: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE: {
      return { 
        ...state, 
        quote: payload[0].quote,
        characterName: payload[0].character,
        characterImage: payload[0].image
      };
    }
    default:
      return state;
  }
}
