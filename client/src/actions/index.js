/**
 * All the actions creator will be here
 */

 import axios from 'axios'
import { FETCH_USER } from './types'

/**
 * Action creator to fetch the users 
 */
 export const fetchUser = () =>async  dispatch => {
        const res = await axios.get('/api/current_user');

        dispatch({ type: FETCH_USER, payload: res.data });
       //cconsole.log(res);
    };
 

 /**
  * Action creator to send the payment token of stripe to 
  * backend to record the user credits in model
  */
 export const handleToken= token => async dispatch =>{
   const res = await axios.post('/api/stripe', token);
   dispatch({ type: FETCH_USER, payload:res.data });
 };