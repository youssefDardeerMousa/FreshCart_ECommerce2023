import React from 'react'
import logo from '../finalProject assets/error.svg'

export default function NotFound() {
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
