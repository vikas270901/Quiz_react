import React, { Component } from 'react'

class Timer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        time:0
    }
  }
    
  componentDidMount(){
    setInterval(() => {
      if(this.state.time > 60){
        this.setState(prevState => ({  
          time:prevState.time + 1
        }))}
      else{
        this.setState(prevState => ({  
          time:prevState.time + 1
        }))
      }
    }, 1002);
  }

  render() {
  return (
    <div>
      <h1>Time: {this.state.time}</h1>
    </div>
  )
  }
}

export default Timer
