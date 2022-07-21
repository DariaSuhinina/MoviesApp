import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header';
import AllFilms from './components/first-page';
import Movie from './components/movie-page';

import './components/first-page/film.css';
import './components/header/style.css';
import ScrollToTop from './components/scroll-to-top';
import BasicModal from './components/modal';

function App() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const [isUserAuthrized, setIsUserAuthrized] = useState('');

  const [isSignIn, setisSignIn] = useState(false);

  const handleUser = (username) => {
    setIsUserAuthrized(username)

    console.log('app.js', username)
  }

  const handleClick = () => {
    setisModalOpen(true);
  }

  return (
    <BrowserRouter>
      <Header setIsOpen={handleClick} isUserAuthrized={isUserAuthrized} setIsUserAuthrized={handleUser} 
      setisSignIn ={setisSignIn} isSignIn ={isSignIn}/>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<AllFilms />} />
        <Route path='/movie-page/:eventId' element={<Movie />} />
      </Routes>

      <BasicModal isActive={isModalOpen} setIsActive={setisModalOpen} isUserAuthrized={isUserAuthrized} 
      setIsUserAuthrized={handleUser} setisSignIn ={setisSignIn}/>
    </BrowserRouter>
  );
}

export default App;
