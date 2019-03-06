export const fetchInfo = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json());
};
