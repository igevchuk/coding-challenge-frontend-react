import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootEpic from './epics';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

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
