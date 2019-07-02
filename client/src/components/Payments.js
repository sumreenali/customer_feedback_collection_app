import React, { Component } from 'react'
import StrripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import  * as actions from '../actions'

class Payments extends Component{
    render(){
        return(
            <StrripeCheckout
                name="falcon"
                description="5$ from 50 email credits"
                amount={500} //US 5$ is equals to 500cents
                token={token => console.log(this.props.handleToken(token))}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                     <button  className='btn' style={{ backgroundColor:'#552fb6' }}>Add Credits</button>
                </StrripeCheckout>
        );
    };
}

export default connect(null,actions)(Payments)