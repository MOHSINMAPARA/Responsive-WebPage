import React from "react"
import {GoLocation } from 'react-icons/go'
import {AiOutlineMobile ,AiOutlineMail} from 'react-icons/ai'
import"./ContactUs.css"
import { Link } from "react-router-dom"



const ContactUS = () => {
    return (
      <div className='ContactUS'>
        <Link to="/" className="btn btn-primary">Go TO Home</Link>
      <div className="Content">
        <h3 className="matter">Do you have any questions?
        Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</h3>
        <br />
     
      <div >
           
                    
                        <h3><GoLocation/>Pune India </h3>

                        <h3><AiOutlineMobile/>+(91)808-757-3969</h3>

                        <h3><AiOutlineMail/>mohsin.mapara@gmail.com</h3>
                
              
        </div>
        </div>
        </div>
)}
export default ContactUS;        
       