import React, { Component } from 'react'
import { connect } from 'react-redux'
import Payments from './Payments'

class Header extends Component {
    /* Helper method for rendering header 
        auth content based on auth action*/
    renderContent(){
        switch(this.props.auth){
            case null:
                return  <li> <a  href="/auth/google">Signin With Google </a> </li> ;
            case false:
                return (
                    <li> <a  href="/auth/google">Signin With Google </a> </li>
                );

            default:
                return [
                <li key="1" ><Payments/></li>,
                <li key="3" style={{margin:'0 10px'  }}> Credits: {this.props.auth.credits}</li>,
                <li key="2"> <a  href="/api/logout">Logout </a> </li>

            ];
        }
    }

    render(){
        return (
            <div className="container" style={{position:'fixed',top:0 ,left:'10%',width:'80%',marginRight:'10%',margintBottom:'100px'}}>
               <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="left brand-logo" 
                    style={{ paddingLeft:'20px', fontSize:'20px',fontWeight:'600' }}>Falcon</a>
                   
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
} 



  // Or with jQuery

//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });

/*
     mapStateToProp function gets call to the entire state
     object out of the redux store that return the object that pass 
     to the header as props 
 */
function mapStateToProps(state){
    return {auth:state.auth};

}
export default connect(mapStateToProps)(Header) 