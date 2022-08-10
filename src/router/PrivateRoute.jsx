import { AuthContext } from '../auth'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

// un high orden component recibe el children 
export const PrivateRoute = ({children }) => {

  const { logged } = useContext( AuthContext );
  const { pathname, search } = useLocation();

  
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (logged) // si el usuario esta autenticado, renderiza el children, si no
   ? children  // redirigirlo al login 
   : <Navigate to= '/login' />
}
