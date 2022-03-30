import React from 'react'
import "./NavBar.css"
import { GiInjustice } from 'react-icons/gi';


function NavBar() {
  return (
    <div className='n'>
      <ul className="NavBar">
          <li>
            <b> <GiInjustice />  <span style={{color:"darkorange"}}>  Divorce</span> Lawyer </b>
          </li>
          <li>
            <b>Call Us : 808-757-3969  </b>
          </li>
      </ul>
    </div>
  )
}

export default NavBar