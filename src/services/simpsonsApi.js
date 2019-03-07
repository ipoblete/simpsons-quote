export const getQuote = () => {
  return fetch ('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json();
    })
    .then(result => {
      return result[0];
    });
};
