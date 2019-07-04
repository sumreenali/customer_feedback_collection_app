/*
    Combine all reducers here and export it
*/

import { combineReducers } from 'redux'
import { reducer as reduxForm } from "redux-form";
import authReducer from './authReducer'
import surveysReducer from "./surveysReducer";

export default combineReducers({
    
    /*
        The keys we provided here in reducer 
        will represent the keys in our state 
    */

    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer

});