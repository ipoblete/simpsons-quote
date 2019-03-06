import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { connect } from 'redux';

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
    return (
      <Quote { ...this.props }/>
    );
  }
}

const mapStateToProps = state => ({
  quote: 
  characterImage:
  characterName:
});

export default connect(

)(SimpsonsQuote);
