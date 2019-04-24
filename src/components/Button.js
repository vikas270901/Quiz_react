import React from 'react'

export default function Button(props) {
    // console.log(props.check);
    // var check = {props.check};
  return (
    <>
        <div>{props.check?(<button className="btn btn-primary" >Accepted!!</button>):(<button className="btn btn-secondary" >Wrong Answer</button>)}</div>
    </>
  )
}
