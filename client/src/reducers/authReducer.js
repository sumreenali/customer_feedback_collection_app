/*
Creating Auth Reducer 
*/

import { FETCH_USER } from '../actions/types'

export default function(state=null, action){
 //  console.log(action);
    switch(action.type){
        case FETCH_USER:
            return action.payload || false; // if user is logged out the  payload will be empty therfore return false
        default:
        //console.log(state);
            return state;
    }
}