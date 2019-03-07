import {
  FETCH_FACTS
} from '../actions/simpsons';

const initialState = {
  quote: '',
  name: '',
  image: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return {
        ...state,
        quote: payload.quote,
        name: payload.character,
        image: payload.image
      };
    default:
      return state;
  }
}
