import {
  UPDATE_QUOTE
} from '../actions/simpsons';

const initialState = {
  quote: '',
  charName: '',
  charImage: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_QUOTE:
      return {
        ...state,
        quote: payload
      };
    default:
      return state;
  }
}
