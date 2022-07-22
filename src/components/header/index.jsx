import React from 'react';

import Logo from './logo';
import SignButton from './signButton';

const Header = ({ setIsOpen, setisSignIn, isSignIn, setAuthrizedUser, AuthrizedUser }) => {

  return (
    <div className='header'>
      <Logo />

      <SignButton setIsOpen={setIsOpen} AuthrizedUser={AuthrizedUser} setAuthrizedUser={setAuthrizedUser} 
      setisSignIn ={setisSignIn} isSignIn ={isSignIn}/>
    </div>
  );
}

export default Header;
