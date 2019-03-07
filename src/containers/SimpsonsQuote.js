import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import Quote from '../components/quote/Quote';
import { getQuote, getCharacterName, getCharacterImage } from '../selectors/simpsons';
import { fetchQuote } from '../action/simpsons';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote(1));
  }
});

class SimpsonQuote extends PureComponent {
    static propTypes = {
      quote: PropTypes.string.isRequired,
      characterName: PropTypes.string.isRequired,
      characterImage: PropTypes.string.isRequired,
      fetch: PropTypes.func.isRequired
    };
  
    componentDidMount() {
      this.props.fetch();
    }
  
    render() {
      const { quote, characterImage, characterName } = this.props;
      return (
        <Quote quote={quote} characterImage={characterImage} characterName={characterName} />
      );
    }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SimpsonQuote);
