import React from 'react';
import Logo from '../../assets/react.svg';
import { Button } from 'element-react';
import { useNavigate } from 'react-router-dom';
import { useBaseState, useBaseDispatch } from '../../context/base';

export const Navbar = (): JSX.Element => {
  const baseDispatch = useBaseDispatch();
  const { isAuthenticated } = useBaseState();

  let navigate = useNavigate();
  const onRedirect = (url: string) => {
    navigate(url);
  };

  const onLogout = (url: string) => {
    baseDispatch({ prop: 'isAuthenticated', payload: false });
    navigate('/');
  };

  return (
    <div className='flex justify-between items-center h-16 border-b w-screen absolute left-0 px-8'>
      <div className='flex justify-start items-center'>
        <img src={Logo} />
        <h1 className='ml-4'>Funny Movie</h1>
      </div>
      <div className='flex justify-end items-center'>
        {
          !isAuthenticated ?
            <React.Fragment>
              <Button type='primary' onClick={() => onRedirect('/login')}>Login</Button>
              <Button onClick={() => onRedirect('/register')}>Register</Button>
            </React.Fragment>
            :
            <React.Fragment>
              <Button type='primary' onClick={() => onRedirect('/share')}>Share a Movie</Button>
              <Button onClick={() => onLogout()}>Logout</Button>
            </React.Fragment>
        }
      </div>
    </div>
  )
};
