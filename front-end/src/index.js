import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './store/index'
import Root from './routes';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
