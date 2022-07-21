import React, { useState } from 'react';

import BoxSignIn from '../box1';
import BoxSignUp from '../box-sign-up';

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

export default function BasicModal({ isActive, setIsActive, setIsUserAuthrized, isUserAuthrized, setisSignIn }) {

  const handleOpen = () => setIsActive(true);

  const handleClose = () => {
    setIsActive(false);
    setModalState(true);
    setIsSucsessfulySignUp(false);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  // const [isEqual, setIsEqual] = useState(true);

  // const [isAuth, setIsAuth] = useState(false);

  const [isSucsessfulySignUp, setIsSucsessfulySignUp] = useState(false);

  // const handleSubmit = () => {
  //   console.log('email', email);
  //   console.log('pass', password);
  //   console.log('repeat', repeatPassword);

  //   // passwords validate
  //   if (password === repeatPassword) {
  //     setIsEqual(true);
  //     console.log('passwords are equal')
  //     console.log(isEqual)
  //   } else {
  //     setIsEqual(false);
  //   }

  //   // local storage
  //   const usersJson = localStorage.getItem('users');
  //   let users = JSON.parse(usersJson) || [];
  //   console.log('users', users);

  //   const userItem = {
  //     'email': email,
  //     'FirstName': FirstName,
  //     'LastName': LastName,
  //     'password': password,
  //     'repeatPassword': repeatPassword,
  //   }

  //   const isEmailExist = users.find(item => email == item.email);

  //   if (isEmailExist) {
  //     setIsAuth(true)
  //   } else if (!isEmailExist) {
  //     setIsAuth(false)
  //   }

  //   if (!isEmailExist && password === repeatPassword) {
  //     console.log('dtfyguhi')
  //     localStorage.setItem('users', JSON.stringify([...users, userItem]));
  //     setIsSucsessfulySignUp(true)
  //   }
  // }

  //handleSignIn
  // const [isExist, setIsExist] = useState(true);
  // const [isCorrectPassword, setisCorrectPassword] = useState(true);


  // const SignIn = () => {
  //   const usersJson = localStorage.getItem('users');

  //   const users = JSON.parse(usersJson);
  //   console.log('users', users)

  //   //is exist
  //   const isEmailExist = users.find(item => email == item.email);

  //   if (!isEmailExist) {
  //     setIsExist(false);
  //   } else {
  //     //is password correct

  //     password === isEmailExist.password ? setisCorrectPassword(true) : setisCorrectPassword(false);

  //     if (password === isEmailExist.password) {
  //       localStorage.setItem('isUserAuthrized', email)

  //       setIsUserAuthrized(email)
  //       console.log('isAuth', isUserAuthrized)

  //       setisSignIn(true)

  //       handleClose()
  //     }
  // }
  // }

  //sign up or sign in

  const [modalState, setModalState] = useState(true);

  const handleSignUp = () => {
    setModalState(false)
  }

  const handleSignIn = () => {
    setModalState(true)
  }

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

          <BoxSignIn handleChangeEmail={handleChangeEmail} email={email} handleChangePassword={handleChangePassword}
            password={password} handleSignUp={handleSignUp} isActive={isActive} setIsActive={setIsActive}
            setIsUserAuthrized={setIsUserAuthrized} isUserAuthrized={isUserAuthrized} setisSignIn={setisSignIn} handleClose={handleClose} />

          :

          (isSucsessfulySignUp ?
            <Box sx={style}>
              <p>You have successfully signed up, now you can log in to the app</p>

              <Button onClick={handleSignIn}>Sign in</Button>
            </Box>

            :
 
            <BoxSignUp handleChangeEmail={handleChangeEmail} email={email} handleChangePassword={handleChangePassword}
              password={password} handleSignIn={handleSignIn} setIsSucsessfulySignUp={setIsSucsessfulySignUp} />
        )
        }
      </Modal>
    </div>
  );
}
