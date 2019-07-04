import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
    /*
         BroweserRouter is used for url based compoent rendering,
         Route is an object that is used to setup rules for url based 
         component rendering.

         The react-redux library is responsible to work 
         react and redux together , connect is a function 
         that gives certain components the ability to call 
         the action

         react-router-dom deals with dom
     */ 

    import Header from "./Header";
    import Landing from "./Landing";
    import Dashboard from "./Dashboard";
    import SurveyNew from "./surveys/SurveyNew";
     
class App extends Component{
    componentDidMount(){
        this.props.fetchUser();

    }

    render() {
        return (
          <div>
            <BrowserRouter>
              <div>
                <Header style={{ position:"fixed" }} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </BrowserRouter>
          </div>
        );
      }
}
/**
 * the connect takes two args the first arg is reserve for the
 * map state to props arg or map state to prop function and in 
 * the second args we pass all action creators
 */
export default connect(null , actions )(App); 