import React from 'react';
import PropTypes from 'prop-types';

export default function Quotes(quotes) {
    console.log(quotes.quotes);
    const quoteList = quotes.quotes.map(q => <li key={q.quote}>{q.quote}
         - {q.character}</li>);
    return (
        <ul>
            {quoteList}
        </ul>
    );
}

Quotes.propTypes = {
    quotes: PropTypes.array.isRequired
};
