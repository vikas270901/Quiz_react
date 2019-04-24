import React, { Component } from 'react'
import Button from './Button';
// import { Agent } from 'https';

class StarTest extends Component {
  
  constructor(props) {
    super(props) 
    this.state = {
       check: null
      }
  }

  handleRadio = (e) => {
    if(e.target.value === this.props.data.ans){
      console.log("Correct Answer");
      this.setState({
       check:true,
       count:0 
      }) 
    }
    else{
      this.setState({
        check:false 
       }) 
    }
  }

  render() {
    // console.log(this.props.data)
      const dat = this.props.data;
    return (
      <div>
          <form>
           {dat.qn}: {dat.q}
           <input type="radio" name="fix" value={dat.s1} onChange={this.handleRadio}  /> {dat.s1}
           <input type="radio" name="fix" value={dat.s2} onChange={this.handleRadio}  /> {dat.s2}
           <input type="radio" name="fix" value={dat.s3} onChange={this.handleRadio}  /> {dat.s3}
           <input type="radio" name="fix" value={dat.s4} onChange={this.handleRadio}  /> {dat.s4}
           {/* <input type="submit" /> */}
         </form>
        {/* <form>
          {dat.questionnum}: {dat.question}
          <input type="radio" name="fix" value={dat.option1} onChange={this.handleRadio}  /> {dat.option1}
          <input type="radio" name="fix" value={dat.option2} onChange={this.handleRadio}  /> {dat.option2}
          <input type="radio" name="fix" value={dat.option3} onChange={this.handleRadio}  /> {dat.option3}
          <input type="radio" name="fix" value={dat.option4} onChange={this.handleRadio}  /> {dat.option4}
          {/* <input type="submit" /> /}
        </form> */}
        <Button check={this.state.check} />
      </div>
    )
  }
  componentDidMount() {
    console.log("Component mounted...");
  }
}

export default StarTest
  
  // submited = (e) => {
  //   e.preventDefault();
  //   e.preventDefault();
  //   console.log(e.target);
    // alert(e.target);
    // console.log(e.target);
    // this.setState({
      // console.log(prevstate);
    // if(this.props.data.ans == this){}
    // this.setState({
    //   ans:this.props.data.
    // })
  // }

  // handleSubmit= (event) => {
  //   event.preventDefault();
  //   // const data = new FormData(event.target);
  //   console.log(event.target);
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
//     checked={this.props.ans === dat.s1}
// checked={this.props.ans === dat.s2}
// checked={this.props.ans === dat.s3}
// checked={this.props.ans === dat.s4}
    // });
  // }


  // <form>
  //         {dat.qn}: {dat.q}
  //         <input type="radio" name="fix" value={dat.s1} onChange={this.handleRadio}  /> {dat.s1}
  //         <input type="radio" name="fix" value={dat.s2} onChange={this.handleRadio}  /> {dat.s2}
  //         <input type="radio" name="fix" value={dat.s3} onChange={this.handleRadio}  /> {dat.s3}
  //         <input type="radio" name="fix" value={dat.s4} onChange={this.handleRadio}  /> {dat.s4}
  //         {/* <input type="submit" /> */}
  //       </form>