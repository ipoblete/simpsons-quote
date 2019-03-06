import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Quote extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired
    };
    render() {
      const { fetch } = this.props;
      return (
        <>
            <button onClick={fetch}>Load New Quote</button>
        </>
      );
    }
}
