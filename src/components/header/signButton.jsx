import React from 'react';

import AccountCircle from './accountCircle';
import Button from '@mui/material/Button';

const SignButton = ({ setIsOpen, setisSignIn, isSignIn, setAuthrizedUser, AuthrizedUser }) => {

  const SignOut = () => {
    setisSignIn(false);

    setAuthrizedUser('')

    localStorage.setItem('AuthrizedUser', '')
  }

  const handleUserName = () => {
    const usersJson = localStorage.getItem('users')

    const users = JSON.parse(usersJson);
    console.log('users', users);

    const getUser = users.find(item => AuthrizedUser == item.email);

    const userName = getUser.FirstName;

    return (
      <span style={{ color: 'white' }}>Hello, {userName}</span>
    )
  }

  return (
    <div>
      {
        isSignIn

          ?

          <div>
            <AccountCircle sx={{ color: 'white' }} />

            {handleUserName()}

            <Button id='sign' variant="contained" onClick={SignOut} style={{ marginLeft: 20 }}>Sign out</Button>
          </div>

          :

          <Button id='sign' variant="contained" onClick={setIsOpen}>Sign in</Button>
      }
    </div>
  )
}

export default SignButton;
