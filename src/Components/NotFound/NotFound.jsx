import React, { useContext, useEffect } from 'react'
import logo from '../finalProject assets/error.svg'
import { DataContext } from '../../Context/ContextData'

export default function NotFound() {
  let {Getusercart,getfavourite}=useContext(DataContext)
  useEffect(()=>{
    getfavourite(localStorage.getItem("token"))
    Getusercart(localStorage.getItem("token"))
  },[])
  return (
    <> 
  <div className="d-flex  justify-content-center align-items-center vh-100 w-100">
    <div className="logo">
        <img src={logo} className='w-100' alt="" />
        
            <h4 className='text-center text-danger fs-3'>Error Page <i className='fas fa-x'></i> </h4>
        
    </div>
    
   </div>  
    
    
    
    </>
  )
}
