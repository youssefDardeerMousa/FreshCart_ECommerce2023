import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Protucted(props) {
 if(localStorage.getItem("token")==null){
    return <Navigate to={'/Login'}/>
 }
 else{
    return props.children
 }

}
