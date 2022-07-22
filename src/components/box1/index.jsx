import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BoxSignIn = React.forwardRef((props, ref) => {

  const {isActive, setIsActive, setAuthrizedUser, AuthrizedUser, setisSignIn, handleChangeEmail, 
    email, handleChangePassword, password, handleSignUp, handleClose} = props;

  const [isExist, setIsExist] = useState(true);
  const [isCorrectPassword, setisCorrectPassword] = useState(true);


  const SignIn = () => {
    const usersJson = localStorage.getItem('users');

    const users = JSON.parse(usersJson);
    console.log('users', users)

    //is exist
    const isEmailExist = users.find(item => email == item.email);

    if (!isEmailExist) {
      setIsExist(false);
    } else {
      //is password correct

      password === isEmailExist.password ? setisCorrectPassword(true) : setisCorrectPassword(false);

      if (password === isEmailExist.password) {
        localStorage.setItem('AuthrizedUser', email)

        setAuthrizedUser(email)
        console.log('isAuth', AuthrizedUser)

        setisSignIn(true)

        handleClose()
      }}}

    return (
      <Box sx={style}>
        <h1>Sign in</h1>

        <TextField type='text' label='email' onChange={handleChangeEmail} value={email} />
        <TextField type='password' label='password' id='password' onChange={handleChangePassword} value={password} />

        <br />
        <Button variant='contained' onClick={SignIn} disabled={(!email, !password)}>Sign in</Button>

        <div>Don't have an account yet?<Button onClick={handleSignUp}>Create one</Button></div>

        {!isExist && <div>You're not signed up</div>}
        {!isCorrectPassword && <div>uncorrect password</div>}
      </Box>
    );
  })

  export default BoxSignIn;
