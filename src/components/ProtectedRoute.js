import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    if(!localStorage.getItem("response")){
        return <Navigate to='/signin'/>
    }
    return children
}

export default ProtectedRoute
