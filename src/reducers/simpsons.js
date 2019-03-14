import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../actions/simpsons';

const initialState = {
  quote: '',
  characterName: '',
  characterImage: '', 
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE:
      return { ...state, 
        quote: payload[0].quote, 
        characterImage: payload[0].image, 
        characterName: payload[0].name,
        loading: false
      };
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
