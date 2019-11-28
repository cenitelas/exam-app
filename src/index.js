import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer(),applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>    
</Provider>            
, document.getElementById('root'));

serviceWorker.unregister();
