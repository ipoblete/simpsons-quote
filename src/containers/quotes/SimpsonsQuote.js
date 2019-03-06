import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { getCharacterName, getImage, getQuote } from '../../selectors/simpsons';
import { fetchQuote } from '../../actions/simpsons';

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

class SimpsonsQuote extends PureComponent {
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
        <>
          <Quote quote={quote} characterImage={characterImage} characterName={characterName} />
        </>
      );
    }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SimpsonsQuote);
