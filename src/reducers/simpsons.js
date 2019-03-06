

const initalState = {
  quote: '',
  characterName: '',
  characterImage: ''
};

export default function reducer(state = initalState, { type, payload }) {
  switch(type) {
    case 'FETCH_QUOTE':
      return {
        ...state,
        quote: payload,
      };
    default:
      return state;
  }
}
