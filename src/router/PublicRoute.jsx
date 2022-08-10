import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {
  
  const { logged } = useContext( AuthContext ); 

  return (!logged) // no esta logeado ? enviar al children que es el login
  ? children  // de lo contrario, (si esta logeado) enviar a Marvel
  : <Navigate to ='/marvel' /> // esta lógica es lo contrario al PrivateRoute
}
