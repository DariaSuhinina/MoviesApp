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

const BoxSignUp = React.forwardRef((props, ref) => {

  const {isActive, setIsActive, setIsUserAuthrized, isUserAuthrized, setisSignIn, handleChangeEmail, 
    email, handleChangePassword, password, handleSignUp, handleClose, setIsSucsessfulySignUp, handleSignIn} = props;

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleChangeFirstName = (e) => {
      setFirstName(e.target.value);
    }
  
    const handleChangeLastName = (e) => {
      setLastName(e.target.value);
    }

    const handleChangeRepeatPassword = (e) => {
      setRepeatPassword(e.target.value);
    }

    const [isEqual, setIsEqual] = useState(true);

  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = () => {
    console.log('email', email);
    console.log('pass', password);
    console.log('repeat', repeatPassword);

    // passwords validate
    if (password === repeatPassword) {
      setIsEqual(true);
      console.log('passwords are equal')
      console.log(isEqual)
    } else {
      setIsEqual(false);
    }

    // local storage
    const usersJson = localStorage.getItem('users');
    let users = JSON.parse(usersJson) || [];
    console.log('users', users);

    const userItem = {
      'email': email,
      'FirstName': FirstName,
      'LastName': LastName,
      'password': password,
      'repeatPassword': repeatPassword,
    }

    const isEmailExist = users.find(item => email == item.email);

    if (isEmailExist) {
      setIsAuth(true)
    } else if (!isEmailExist) {
      setIsAuth(false)
    }

    if (!isEmailExist && password === repeatPassword) {
      console.log('dtfyguhi')
      localStorage.setItem('users', JSON.stringify([...users, userItem]));
      setIsSucsessfulySignUp(true)
    }
  }

    return (
       <Box sx={style}>
              <h1>Sign up</h1>

              <TextField type='text' label='email' onChange={handleChangeEmail} value={email} />
              <TextField type='text' label='First name' onChange={handleChangeFirstName} value={FirstName} />
              <TextField type='text' label='Last name' onChange={handleChangeLastName} value={LastName} />
              <TextField type='password' label='password' id='password' onChange={handleChangePassword} value={password} />
              <TextField type='password' label='repeat password' onChange={handleChangeRepeatPassword} value={repeatPassword} />

              <br />
              <Button variant='contained' onClick={handleSubmit} disabled={(!email, !password, !repeatPassword)}>Sign up</Button>

              <Button onClick={handleSignIn}>Sign in</Button>

              {!isEqual && <div>Passwords are not equal</div>}
              {isAuth && <div>You're already have an account</div>}
            </Box>
    );
  })

  export default BoxSignUp;
