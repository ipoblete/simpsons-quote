export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json[0];
    });
};
