import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouteComponent(props) {
  
  
  if (localStorage.getItem('token') == null) {
   return <Navigate to='/'/>
 }
 else{
    return props.children
 }
}
