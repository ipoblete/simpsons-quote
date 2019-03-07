export const getQuote = () => {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(res => {
            console.log('hello from API');
            return res.json();
        });
}
;
