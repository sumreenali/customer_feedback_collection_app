/*
    Combine all reducers here and export it
*/

import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
    
    /*
        The keys we provided here in reducer 
        will represent the keys in our state 
    */

    auth: authReducer

});