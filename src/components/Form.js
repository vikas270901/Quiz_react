// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// class Form extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//            name: '',
//            er: ''
//         }
//       }
//     nameChange = (event) => {
//         this.setState ({
//             name: event.target.value,
//         })
//     }

//     erChange = (event) => {
//         this.setState ({
//             er: event.target.value,
//         })
//     }    

//     render() {
//     return (
//       <><br/>
//         <form onSubmit={this.handle} >
//         <label>Name: </label>
//             <input type="text" value={this.state.name} onChange={this.nameChange} /><br />
//         <label>Enrollment Number: </label>
//             <input type="text" value={this.state.er} onChange={this.erChange} /><br />
//             <input type="submit" value="submit" />
//         </form>
//       </>
//     )
//   }
// }

// export default {handle, Form}






// <table>
//             <form>
//             <tr>
//             <td><label>Name: </label></td>
//             <td><input type="text" value={name} onChange={nameChange} /></td>
//             </tr>
//             <tr>
//             <td><label>Enrollment Number: </label></td>
//             <td><input type="text" value={er} onChange={erChange} /></td>
//             </tr>
//                 <button onClick={handle}>Submit</button> 
            
//             </form>
//     </table>