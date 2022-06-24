import React, { Component } from 'react'

export class Rendering extends Component {

    constructor(props){
        super(props);
        this.state={isLoggedIn:true};
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogOutClick=this.handleLogOutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    handleLogOutClick(){
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    render() {

        let button;
        if(this.state.isLoggedIn){
             button=<LogOut onClick={this.handleLogOutClick}/>
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









