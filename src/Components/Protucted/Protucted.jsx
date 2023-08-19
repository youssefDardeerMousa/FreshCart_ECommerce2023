import React from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../../Context/ContextData';

export default function Protected(props) {
  const token = localStorage.getItem("token");
  
  if (token && token.slice(0, 36) !== "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9") {
    return <Navigate to={'/Login'} />;
  } else {
   return props.children;
  }
}
