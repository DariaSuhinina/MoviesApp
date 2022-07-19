import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import Header from './components/header';
import AllFilms from './components/first-page';
import Movie from './components/movie-page';

import './components/first-page/film.css';
import './components/header/style.css';
import ScrollToTop from './components/scroll-to-top';
import BasicModal from './components/modal';

function App() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleClick = () => {
    setisModalOpen(true);
  }

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Header setIsOpen={handleClick}/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AllFilms />} />
        <Route path='/movie-page/:eventId' element={<Movie />} />
      </Routes>
      <BasicModal isActive={isModalOpen} setIsActive={setisModalOpen}/>
      {/* <BasicModal /> */}

    </BrowserRouter>
  );
}

export default App;
