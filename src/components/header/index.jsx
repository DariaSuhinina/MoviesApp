import React from 'react';

import Sign from './sign';
import Logo from './logo';

import Button from '@mui/material/Button';

const Header = (props) => {

  const { setIsOpen } = props;

  return (
    <div className='header'>
      <Logo />
      <Sign />
      <Button id='sign' variant="contained" onClick={setIsOpen}>Sign in</Button>
    </div>
  );
}

export default Header;
