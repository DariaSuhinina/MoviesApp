import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import Header from './components/header';
import AllFilms from './components/first-page';
import Movie from './components/movie-page';

import './components/first-page/film.css';
import './components/header/style.css';
import ScrollToTop from './components/scroll-to-top';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AllFilms />} />
        <Route path='/movie-page/:eventId' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
