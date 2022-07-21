import React from 'react';

import Logo from './logo';
import SignButton from './signButton';

const Header = ({ setIsOpen, setisSignIn, isSignIn, isUserAuthrized, setIsUserAuthrized }) => {

  return (
    <div className='header'>
      <Logo />

      <SignButton setIsOpen={setIsOpen} isUserAuthrized={isUserAuthrized} setIsUserAuthrized={setIsUserAuthrized} 
      setisSignIn ={setisSignIn} isSignIn ={isSignIn}/>
    </div>
  );
}

export default Header;
