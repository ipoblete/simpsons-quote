import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      return (
        <>
          <Component {...this.props} />
        </>
      );
    }
  }
  return WithFetch;
};
