import React, { useState } from 'react'
import help from '../api/help'
const Hopeline = () => {
  const [helpn,setHelpn]=useState(help)
  return (
   <div className='hope'>
     <div className="container-fluid" style={{ marginTop: 50 }}>
    <h3 style={{ fontWeight: "bold" }}>Connecting you to hope!</h3>
  </div>
  <div className="container-fluid">
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover table-condensed">
        <tbody>
        <tr><th>State</th><th>Toll-Free Helpline</th><th>Rehab Centre</th><th>Contact</th></tr>
         {helpn.map((h)=>{
          return (
          <tr>
          <td>{h.State}</td>
          <td>{h.tollFree}</td>
          <td>{h.Center}</td>
          <td>{h.Contact}</td>
          </tr>)
         })}
        </tbody>
      </table>
    </div>
  </div>
   </div>
  )
}

export default Hopeline