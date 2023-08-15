import React from 'react'
import { toast } from 'react-toastify'
import logo from '../finalProject assets/freshcart-logo.svg'
import style from "./style.module.css"
import { Helmet } from 'react-helmet'
export default function Allorders() {
    let toass=()=>toast.success("Successfully process, and you will receive your orders after 3 days from this day ")
    
        toass({theme:"green"})
    
    return (
    <>
    <div className={`${style.bg}`}>
    <div className="d-flex  justify-content-center align-items-center vh-100 w-100">
    <div className="logo">
        <img src={logo} className='w-100' alt="" />
            <h4 className='text-light p-3 my-3 bg-main'>Successfully process  <i className='fas fa-check fs-3'></i></h4>
    </div>
    
   </div>
    </div>
 
   <Helmet>
    <title>Payment</title>
   </Helmet>
    </>
  )
}
