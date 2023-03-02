import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>

    </>
  );
};

export default Main;