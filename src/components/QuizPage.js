import React, { Component } from 'react';
import {Data} from "../Data";
import StarTest from "./StarTest";
import Timer from './Timer';
class QuizPage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       iteration: 0,
       flag: false
    }
  }
  

  render() {
    // console.log(...Data);
    var {qn:questionnum, q:question, s1:option1, s2:option2, s3:option3, s4:option4, ans:ans}=Data[this.state.iteration];
    var dats = {questionnum, question, option1, option2, option3, option4, ans};
    return (
      <>
      <Timer />
      {/* <StarTest key={questionnum} data={dats} /> */}
        {Data.map(data => 
          <StarTest key={data.qn} data={data} />
        )}
      </>
    )
  }
  componentDidMount() {
    console.log("Component mounted2...");
  }
}

export default QuizPage
