import React from 'react'
import { FaChild } from 'react-icons/fa'
import { AiFillUnlock } from 'react-icons/ai'
import { MdBusinessCenter } from 'react-icons/md'
import "./LowerCOntent.css"

function LowerContent() {
  return (
    <div className='LowerContent'>
      <div>
            <div>
            <h3 className='service'>OUR SERVICE</h3>
            <h6>Lorem, ipsum dolor sit amet consectetur adipisicing.</h6>
            </div>
            <br />
            
            <div className='icon'>
                <div >
                &nbsp;&nbsp;&nbsp;&nbsp; <FaChild/>
                  <h6>Child Law</h6>
                </div>
                <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <AiFillUnlock/>
                  <h6>Criminal Law</h6>
                </div>
                <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <MdBusinessCenter/>
                  <h6>Business Law</h6>
                </div>


            </div>
      </div>
    </div>
  )
}

export default LowerContent