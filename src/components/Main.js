import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import Form from './Form';
// import {Data} from "../Data";
import MainForm from './MainForm';
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          er: ''
      }
    }
    nameChange = (event) => {// const { name, value } = e.target;
      this.setState ({
          name: event.target.value,
        })
    }
    erChange = (event) => {
      this.setState ({
        er: event.target.value,
      })
  }

  handle = (event) => {
    // event.preventDefault();
    console.log(`Change was Handled... and value is ${this.state.name}`);
    // return "<Redirect to='/startest'/>";
  }

  redir= e => {
    // console.log(this);
    // e.preventDefault();
    this.props.history.push('/quiz');
    // return <Redirect to='/startest'/>;
  }

    render() {
    return (
      <><br/>
        <MainForm
        name={this.state.name}
        er={this.state.this}
        handle={this.handle} 
        nameChange={this.nameChange}
        erChange={this.erChange}
        redir={this.redir} />
      </>
    )
  }
  // componentDidMount(){
  //   console.log("Main.js Mounted...")
  //   // return <Redirect to='/startest'/>    
  //   // this.props.history.push('/startest')
  // }
}

export default Main
