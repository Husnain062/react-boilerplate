import React from 'react';
import PropTypes from 'prop-types';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { Provider as ReduxProvider } from 'react-redux';
import ApplicationContext from './ApplicationContext';

export default function App({ context, insertCss, children }) {
  // NOTE: If you need to add or modify header, footer etc. of the app,
  // please do that inside the Layout component.

  return (
    <StyleContext.Provider value={{ insertCss }}>
      <ApplicationContext.Provider value={{ context }}>
        {React.Children.only(children)}
      </ApplicationContext.Provider>
    </StyleContext.Provider>
  );
}

App.propTypes = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  context: PropTypes.shape({
    // Universal HTTP client
    fetch: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object,
    // Integrate Redux
    // http://redux.js.org/docs/basics/UsageWithReact.html
    ...ReduxProvider.childContextTypes,
  }).isRequired,
  children: PropTypes.element.isRequired,
};
