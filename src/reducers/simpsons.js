import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../action/simpsons';
const initialState = {
  quote: '',
  characterName: '',
  characterImage: ''
};

 export default function reducer(state = initialState, { type, payload }) {
   switch(type) {
     case FETCH_QUOTE:
      return { 
        ...state, 
        quote: payload.quote,
        characterName: payload.characterName,
        characterImage: payload.characterImage
      };
    default:  
      return state;
   }
}