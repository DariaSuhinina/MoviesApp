// import './style.css';
import React from 'react';
import Sign from './sign';
import Logo from './logo';

const Header = (props) => {
  
  return (
    <div className='header'>
      <Logo />
      <Sign />
    </div>
  );
}

export default Header;
