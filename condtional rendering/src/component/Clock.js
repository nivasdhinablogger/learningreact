import React, { Component } from 'react'

export class Clock extends Component {

  constructor(){
    super();
    this.state={date: new Date()};
  }
  componentDidMount(){
    this.timer = setInterval(()=>this.setState({date:new Date()}),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <b>This clock below is done by rendering the Dom each time the state Updates. If you can follow this code you can easily understand the state concept in React. Lifecycle methods are also used in this part.  </b>
        <h3>The Time is {this.state.date.toLocaleTimeString()} </h3>
      </div>
    )
  }
}

export default Clock