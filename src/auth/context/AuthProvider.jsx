import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

// const initialState = {
//   logged: false,
// } el initialstate se manda en el Reducer como un objeto vacio 

// funcion para inicializar el estado, detecta que tenemos el usuario en el local Storage y lo carga 
const init = () => {

  const user = JSON.parse(  localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user,
  }

}

// este componennte utiliza el AuthContext para enviar informacion a toda la aplicacion 
export const AuthProvider = ({ children }) => {

  // el useReducer recibe 3 parametros en este caso
  const [authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = ( name = '' ) => {
// el login envia un dispatch de una accion , recibe el name, un string vacio

    const user = { id: 'ABC', name}

    const action = {
      type: types.login,
      payload: user
      
    }
    localStorage.setItem('user', JSON.stringify( user) );

    dispatch(action);
  }

  // funcion para borrar la informacion en el local storage
  const logout = () => {
      localStorage.removeItem('user');
      
      // llamo la accion desde el authReducer 
      const action = { type: types.logout }; 
      dispatch(action);
  }

  return (
      <AuthContext.Provider value= { {
        ...authState,

        //Metodos 
        login: login,
        logout: logout
       }}>
        { children }
      </AuthContext.Provider>
  );
}