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

export default function BasicModal({ isActive, setIsActive, setAuthrizedUser, AuthrizedUser, setisSignIn }) {

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

  const [isSucsessfulySignUp, setIsSucsessfulySignUp] = useState(false);

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
            setAuthrizedUser={setAuthrizedUser} AuthrizedUser={AuthrizedUser} setisSignIn={setisSignIn} handleClose={handleClose} />

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
