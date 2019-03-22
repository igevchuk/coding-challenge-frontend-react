import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  appWithProvider,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
