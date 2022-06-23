import React, { Component } from 'react'

export class Event extends Component {

    constructor(){
        super();
        this.state={isYes : false};
        this.changeYesToNo=this.changeYesToNo.bind(this);
    }

    changeYesToNo(e){
        this.setState({isYes:!this.state.isYes});
    }

    render() {
        return (
            <div>
                <button onClick={this.changeYesToNo}>{this.state.isYes ? "Yes" : "No"}</button>
            </div>
        )
    }
}

export default Event
