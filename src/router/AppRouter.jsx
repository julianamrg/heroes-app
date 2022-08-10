import React from 'react'
import {Routes, Route } from 'react-router-dom';
import {LoginPage} from '../auth';
import {HeroesRoutes} from '../heroes/routes/HeroesRoutes';
//import { Navbar } from '../ui';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>

      <Routes>
        
        <Route path='login' element= {
          <PublicRoute>
              <LoginPage/>
          </PublicRoute>
          
          } />

          {/* otra forma de hacer las rutas publicas es  
          
          <Route path='login/*' element= {
          <PublicRoute>
              <Routes>
                 <Route path='/*' element={<LoginPage/>} />
              </Routes>
          </PublicRoute>
          
          } />
          
          */}
          
          <Route path = '/*' element = { 
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
          } />
        
         
      </Routes>
    
    </>
  )
}
