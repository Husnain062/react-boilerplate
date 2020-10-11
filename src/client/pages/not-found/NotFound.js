import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './NotFound.css';

export default function NotFound({ title }) {
  useStyles(s);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Sorry, the page you were trying to view does not exist.</p>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};
