import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore ,  applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import './App.css'
import App from './components/App'
import reducers from './reducers'

/*
    Provide is a component provided by react redux
    that makes sure react and redux works togheter
    nicely.

    createStore args are reducers or list of reducer,
    initial state and middleware

    The store is work inside the provider tag and the 
    provider tag is the parent component of the App 
    compoent which is our very root component

    Anytime time any changes occur in state the Provide 
    will inform to the App component

    redux-thunk is responsible for dispaytching the actions
    to all the reducers instead of returning imediately to 
    any single reducer if the reducer returns any function
    instead of any payload


*/
const store = createStore(reducers, {} , applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}> <App/></Provider>,
     document.querySelector('#root')
     );

console.log('The stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('the environment key is',process.env.NODE_ENV);