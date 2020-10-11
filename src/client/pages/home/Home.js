import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ name }) {
  return <h1>Main Component {name}</h1>;
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
