import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/ContextData'
import Cookies from 'js-cookie';

export default function LayOut({userData,setuserData,cookies}) {
  let navigate=useNavigate()
  let {setCount,setfacount}=useContext(DataContext)

    function logOut(){
      Cookies.remove("Authentication")
        localStorage.removeItem("token");
       
        setuserData(null);
        setCount(0);
        setfacount(0)
        navigate("/");
        console.clear()
       
    }
  return (
    <>
    <Navbar userData={userData} logOut={logOut} />
<Outlet />
    </>
  )
}
