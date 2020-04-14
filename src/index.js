import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import '@babel/plugin-transform-arrow-functions'

import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter} from 'react-router-dom'; //if you want router use that
//import {createStore} from 'dedux'; //if you want redux store use that
import App from './App';
import * as serviceWorker from './serviceWorker';

//import rootReducer from './modules';//if you want redux store use that 'module here'
//const sotre = createStore(rootReducer); //make redux


// base render react 
ReactDOM.render(
    <App />, document.getElementById('root')
);

/* 
// if you want router use that

ReactDOM.render(
    <BrowserRouter>
        <App />    
    </BrowserRouter>
);

*/

/*
// base render react 
ReactDOM.render(
    <App />, document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
