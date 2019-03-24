import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootEpic from './epics';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

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
// registerServiceWorker();
