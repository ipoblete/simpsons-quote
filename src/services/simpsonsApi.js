export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me')
    .then(res => {
      return res.json();
    });
};