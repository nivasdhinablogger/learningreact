import React, { Component } from 'react'

export class Rendering extends Component {

    constructor(){
        super();
        this.state={isLoggedIn:false};
        this.handleLoginClick=this.handleLoginClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }

    render() {

        let button;
        if(this.state.isLoggedIn){
             button=<LogOut onClick={this.handleLoginClick}/>
        }else{
             button=<Login onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

export default Rendering


const Login   = props => {
    return (
        <div>
            <button onClick={props.onClick}>Login</button>
        </div>
        
    )
}


const LogOut = props => {
    return (
        <div>
            <button onClick={props.onClick}>Logout</button>
        </div>
    )
}


const Greetings = props => {
    if(props.isLoggedIn){

        return (
            <div>
                
            </div>
        )
    }
}













