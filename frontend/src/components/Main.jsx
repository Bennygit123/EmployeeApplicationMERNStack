import React from 'react';
import Navbar from './Navbar';

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Main;
