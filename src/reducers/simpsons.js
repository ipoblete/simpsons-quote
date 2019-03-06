import {
  UPDATE_QUOTE,
  UPDATE_NAME,
  UPDATE_IMAGE
} from '../actions/simpsons';

const initialState = {
  quote: '',
  name: '',
  image: ''
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
        name: payload
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        image: payload
      };
    default:
      return state;
  }
}
