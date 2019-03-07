//simpsons comes from our index reducer
export const getQuote = state => {
  console.log('thiss', state.simpsons);
  return state.simpsons.quote;
};

export const getCharacterName = state => {
  return state.simpsons.characterName;
};

export const getImage = state => {
  return state.simpsons.characterImage;
};
