import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/ContextData'

export default function LayOut({userData,setuserData}) {
  let navigate=useNavigate()
  let {setCount,setfacount,clear}=useContext(DataContext)

    function logOut(){
        localStorage.removeItem("token");
        setuserData(null);
        setCount(0);
        setfacount(0)
        navigate("/")
    }
  return (
    <>
    <Navbar userData={userData} logOut={logOut} />
<Outlet />
    </>
  )
}
