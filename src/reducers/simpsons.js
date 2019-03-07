import { FETCH_QUOTE, FETCH_QUOTES_LOADING } from '../actions/simpsons';

const initialState = {
  quote: '',
  characterName: '',
  characterImage: '',
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE: {
      return { 
        ...state, 
        quote: payload[0].quote,
        characterName: payload[0].character,
        characterImage: payload[0].image,
        loading: false
      };
    }
    case FETCH_QUOTES_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
