export const getQuote = () => {
  //return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`)
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
    .then(res => res.json());
};