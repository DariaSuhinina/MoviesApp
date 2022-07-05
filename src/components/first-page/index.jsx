import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllFilms = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('in useEffect');

    setFilms();
  }, []);

  const setFilms = useCallback(async () => {
    setIsLoading(true);
    const films = 'https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true';

    const data = await fetch(films);

    const filmList = await data.json();
    console.log(filmList);

    setList(filmList);
    setIsLoading(false);
  })

  return (
    <div id='filmsList'>

      {isLoading
        ?
        (<div>movie is loading</div>)
        :
        (<>
          {list.map((i) =>
            <div className='filmBlock' id={`block${i}`} key={i.eventId}>
              <img className='filmPoster' src={i.posterLink} alt='movie' style={{ width: 190, height: 270 }} />

              <div className='filmName'>{i.name}</div>
              <button className='buyBtn'><Link to={`../movie-page/${i.eventId}`}>Купить билет</Link></button>

            </div>
          )}
        </>
        )
      }
    </div>
  )
}

export default AllFilms;
