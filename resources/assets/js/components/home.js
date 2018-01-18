import React, { Component } from 'react'
import Nav from './navbar'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    return (
         <div> 
            <Nav link="Logout" />       
            <div className="container text-center title">
               <h1>Hey, You are logged in ! {this.props.userInit.name}</h1>
            </div>
          </div>   
    )
  }
}

function mapStateToProps(state){
    return{
        userInit:state.userInit
    };
}
export default connect(mapStateToProps)(Home);