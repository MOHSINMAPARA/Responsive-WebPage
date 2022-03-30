import React,{useState} from 'react'
import"./MiddleContent.css"
import { Link } from 'react-router-dom'

const MiddleContent = () => {

    const[fullName,setFullName]=useState("")
    const[email,setEmail]=useState("")
    const[number,setNumber]=useState("")
    const[comment,setComment]=useState("")
    

    const submitForm =(e)=>{
        e.preventDefault()
        const data={
            fullName:fullName,
            email:email,
            number:number,
            comment:comment
        }
        console.log(data)
        alert("Submitted")

    }

  return (
  
      <div className='MiddleContent' >
            <div className='content'>
                <div className='s' style={{color:"white"}}>
                    <h3>YOU DESERVE</h3>
                    <h1>THE BEST</h1>
                    <h3>LAWYERS</h3>
                    <h5><i>...with over 30 years of law practice !</i></h5>
                    <Link to="./ContactUs" style={{background:"orangered"}} className='btn btn-primary' >CONTACT US</Link>
                </div>
                <div className='form' >
                    <h3 style={{color:"white"}}>Need a lawyer?</h3>
                    <h6 style={{color:"white"}}>Request your fast & Free Quote</h6>
                    

                    <form className='input' onSubmit={submitForm}>
                        <input required onChange={(e)=>setFullName( e.target.value)} style={{margin:"0.2rem"}} type="text" placeholder="Full Name"/> 
                        <input required onChange={(e)=> setEmail(e.target.value)} style={{margin:"0.2rem"}} type="email" placeholder='Email Address'/>
                        <input required onChange={(e)=> setNumber(e.target.value)} style={{margin:"0.2rem"}} type="number" placeholder='Phone Number '/>
                        <input onChange={(e)=> setComment(e.target.value)} style={{height:"4rem", margin:"0.2rem"}} type="text" placeholder='Comment(Optional)'/>
                        <input  type="submit" style={{background:"black", width:"87%",margin:"0.2rem"}} className='btn btn-primary'/>    
                    </form>

                </div>
            </div>    
        
    </div>
  
  )
}

export default MiddleContent