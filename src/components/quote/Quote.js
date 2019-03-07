import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Quote extends PureComponent {
    static propTypes = {
      quote: PropTypes.string.isRequired,
      characterName: PropTypes.string.isRequired,
      characterImage: PropTypes.string.isRequired
    };
    render() {
      const { quote, characterName, characterImage } = this.props;
      return (
        <>
            <h2>{quote}</h2>
            <h2>-{characterName}</h2>
            <img src={characterImage}/>
        </>
      );
    }
}
