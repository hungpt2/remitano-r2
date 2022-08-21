import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../Login';
import RegisterPage from '../Register';

import DashboardPage from '../Dashboard';
import HomePage from '../Home';
import SharePage from '../Share';

import { useBaseState} from '../../context/base';

export const App = () => {
  return (
    <BrowserRouter basename='/remitano-r2'>
      <Routes>
        <>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Home' element={
            <Protected>
              <HomePage />
            </Protected>
          } />
          <Route path='/Share' element={
            <Protected>
              <SharePage />
            </Protected>
          } />
        </>
      </Routes>
    </BrowserRouter>
  );
}

const Protected = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useBaseState();
  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return children;
 };
