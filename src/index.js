import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux'
import { forbiddenWordsMiddleware } from './redux/middleware';
import creataSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';

const saga = creataSagaMiddleware()

const store = createStore(rootReducer,compose(applyMiddleware(thunk, forbiddenWordsMiddleware, saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(sagaWatcher) //позволяет саге следить и запускать watcher

//Provider - компонент для связи реакта с редаксом, он принимает стор
const app = (<Provider store={store}>
  <App />
</Provider>)

render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
