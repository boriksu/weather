import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import App from './components';
import Reducers from "./redux/store";
import thunk from 'redux-thunk';
import "./styles2/index.scss"
const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
);

