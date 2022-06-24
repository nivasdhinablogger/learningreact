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
      <div><h1>The Time is {this.state.date.toLocaleTimeString()} </h1></div>
    )
  }
}

export default Clock