import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { DataContext } from '../../Context/ContextData';
import Cookies from 'js-cookie';

export default function Protucted(props) {
  let {A}=useContext(DataContext)

  let cookies=Cookies.get("Authentication")
  console.log(cookies);
 if(cookies==undefined ){
   return <Navigate to={'/Login'}/>

 }
 else{
  return props.children 

 }

}
