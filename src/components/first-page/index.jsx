import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllFilms = (props) => {
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [city, setCity] = useState(1);

  const chooseCity = (event) => {
    event.target.value === 'minsk'
      ? setCity(1)
      : setCity(5);
    console.log(city)
  };

  useEffect(() => {
    console.log('in useEffect');

    setFilms();
  }, [city]);

  const setFilms = useCallback(async () => {
    try {
      setIsLoading(true);
      const films = `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22${city}%22:1%7D&extended=true`;

      const data = await fetch(films);

      const filmList = await data.json();
      console.log(filmList);

      setList(filmList);
      // setList([]); // проверка на пустой массив
      setIsLoading(false);
      // throw new Error('error');
    }
    catch (error) {
      setIsError(true);
    }
  })

  let answer;

  if (list.length === 0) {
    answer = <div>"We've found no movies, sorry!"</div>
  }
  else {
    answer = list.map((i) =>
      <div className='filmBlock' id={`block${i}`} key={i.eventId}>

        <img className='filmPoster' src={i.posterLink} alt='movie' style={{ width: 190, height: 270 }} />
        <div className='filmName'>{i.name}</div>

        <button className='buyBtn'><Link to={`../movie-page/${i.eventId}`}>Купить билет</Link></button>

      </div>)
  }

  return (
    <div>

      <select className='city' onChange={chooseCity}>
        <option value="minsk">Minsk</option>
        <option value="grodno">Grodno</option>
      </select>

      <div id='filmsList'>
        {isError
          ?
          (<div>'Ooops, something went wrong'</div>)
          :
          (<>
            {isLoading
              ?
              (<div className='loader'></div>)
              :
              (<>
                {answer}
              </>)
            }
          </>)}
      </div>
    </div>
  )
}

export default AllFilms;
