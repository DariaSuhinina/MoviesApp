import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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

export default function BasicModal({ isActive, setIsActive }) {

  const handleOpen = () => setIsActive(true);

  const handleClose = () => {
    setIsActive(false);
    setModalState(true);
    setIsSucsessfulySignUp(false);
  };

  const [email, setEmail] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleChangeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  }

  const [isEqual, setIsEqual] = useState(true);

  const [isAuth, setIsAuth] = useState(false);

  const [isSucsessfulySignUp, setIsSucsessfulySignUp] = useState(false);

  const handleSubmit = () => {
    console.log('email', email);
    console.log('pass', password);
    console.log('repeat', repeatPassword);

    // passwords validate
    if (password === repeatPassword) {
      setIsEqual(true);
      console.log('passwords are equal')
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
    console.log('exist', isEmailExist);
    console.log('exist', !!isEmailExist);

    if (isEmailExist) {
      setIsAuth(true)
    } else {
      localStorage.setItem('users', JSON.stringify([...users, userItem]));
      setIsSucsessfulySignUp(true)
    }
  }

  //handleSignUp
  const [isExist, setIsExist] = useState(true);
  const [isCorrectPassword, setisCorrectPassword] = useState(true);


  const SignIn = () => {
    const usersJson = localStorage.getItem('users');

    const users = JSON.parse(usersJson);
    console.log('users', users)

    //is exist
    const isEmailExist = users.find(item => email == item.email);
    console.log('exist', isEmailExist);
    console.log('exist', !!isEmailExist);

    if (!isEmailExist) {
      setIsExist(false);
    } else {
      //is password correct

      password === isEmailExist.password ? setisCorrectPassword(true) : setisCorrectPassword(false);
      console.log('password', isEmailExist.password)
    }
  }

  //sign up or sign in

  const [modalState, setModalState] = useState(true);

  const handleSignUp = () => {
    setModalState(false)
  }

  const handleSignIn = () => {
    setModalState(true)
  }

  //is Sucsessfuly SignUp



  // const setStateSignUp = () => {
  //   setIsSucsessfulySignUp(true)
  // }

  return (
    <div>
      <Modal
        open={isActive}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalState

          ?

          (<Box sx={style}>
            <h1>Sign in</h1>

            <TextField type='text' label='email' onChange={handleChangeEmail} value={email} />
            <TextField type='password' label='password' id='password' onChange={handleChangePassword} value={password} />

            <br />
            <Button variant='contained' onClick={SignIn} disabled={(!email, !password)}>Sign in</Button>

            <div>Don't have an account yet?<Button onClick={handleSignUp}>Create one</Button></div>

            {!isExist && <div>You're not signed up</div>}
            {!isCorrectPassword && <div>uncorrect password</div>}
          </Box>)

          :

          (isSucsessfulySignUp ?
            <Box sx={style}>
              <p>You have successfully signed up, now you can log in to the app</p>

              <Button onClick={handleSignIn}>Sign in</Button>
            </Box>

            :

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
            </Box>)
        }
      </Modal>
    </div>
  );
}
