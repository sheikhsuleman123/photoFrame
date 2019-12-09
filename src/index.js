import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import RootReducaer from './redux/Reducer';
import {Provider} from 'react-redux';
import Appjsx from './Components/App';

const store = createStore(RootReducaer);


ReactDOM.render(<Provider store={store}><BrowserRouter><Appjsx /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
