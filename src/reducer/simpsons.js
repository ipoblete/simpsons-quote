import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../actions/Simpsons';


const initialState = {
    quote: [],
    isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
    switch(type) {
        case FETCH_QUOTE:
            return { ...state, quote: payload, isLoading: false };
        case FETCH_QUOTE_LOADING:
            return { ...state, loading: true };
        default: 
            return state;
    }

}
