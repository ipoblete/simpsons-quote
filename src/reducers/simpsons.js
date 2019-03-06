import {
  UPDATE_QUOTE,
  UPDATE_NAME,
  UPDATE_IMAGE
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
    case UPDATE_NAME:
      return {
        ...state,
        charName: payload
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        charImage: payload
      };
    default:
      return state;
  }
}
