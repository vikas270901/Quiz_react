import React from 'react'

export default ({handle, nameChange, erChange, name, er, redir}) => {
  return (
    <>
        <form onSubmit={redir}>
          <div className="row">
            <div className="col">
              <label>Name: </label>
              <input type="text" className="form-control" value={name} onChange={nameChange} required/>
            </div>
            <div className="col">
            <label>Enrollment Number: </label>
              <input type="text" className="form-control" value={er} onChange={erChange} required/><br/>
              </div>              
          </div>
          <div className="form-group">
             <div className="form-check">
                <input className="form-check-input" type="checkbox"  id="gridCheck"  required />
                <label className="form-check-label" for="gridCheck">
                 Agree Terms and Conditions 
                </label>
               </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handle}>Submit</button>
        </form>
    </>
  )
}
