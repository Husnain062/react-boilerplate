import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './ErrorPage.css';

export function ErrorPageWithoutStyle({ error }) {
  if (__DEV__ && error) {
    return (
      <>
        <h1>{error.name}</h1>
        <pre>{error.stack}</pre>
      </>
    );
  }

  return (
    <>
      <h1>Error</h1>
      <p>Sorry, a critical error occurred on this page.</p>
    </>
  );
}

ErrorPageWithoutStyle.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
  }),
};

ErrorPageWithoutStyle.defaultProps = {
  error: null,
};

export default function ErrorPage(props) {
  useStyles(s);
  return ErrorPageWithoutStyle(props);
}
