import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Header from './components/header';
import AllFilms from './components/first-page';
import Movie from './components/movie-page';

import './components/first-page/film.css';
import './components/header/style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<AllFilms />} />
        <Route path='/movie-page/:eventId' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
